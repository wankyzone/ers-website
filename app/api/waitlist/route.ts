import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase env vars");
  }

  return createClient(url, key);
}

// Stronger referral code generator
function generateCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

// Basic email validation
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const supabase = getSupabase();

    const body = await req.json();
    const email = body?.email?.toLowerCase()?.trim();
    const referralCode = body?.referralCode || null;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({
        ok: true,
        message: "Already on waitlist",
      });
    }

    // Generate unique referral code (retry max 3 times)
    let code = generateCode();
    let attempts = 0;

    while (attempts < 3) {
      const { data: existingCode } = await supabase
        .from("waitlist")
        .select("id")
        .eq("referral_code", code)
        .maybeSingle();

      if (!existingCode) break;

      code = generateCode();
      attempts++;
    }

    // Insert new user
    const { data, error } = await supabase
      .from("waitlist")
      .insert({
        email,
        referral_code: code,
        referred_by: referralCode,
      })
      .select()
      .single();

    if (error) {
      console.error("Insert error:", error);

      return NextResponse.json(
        { ok: false, error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Increment referral count (safe Supabase pattern)
    if (referralCode) {
      const { error: rpcError } = await supabase.rpc(
        "increment_referrals",
        {
          code_input: referralCode,
        }
      );

      if (rpcError) {
        console.error("Referral increment error:", rpcError);
      }
    }

    return NextResponse.json({
      ok: true,
      data,
    });

  } catch (err) {
    console.error("Waitlist API error:", err);

    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}