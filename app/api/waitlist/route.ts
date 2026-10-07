import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    const missing = [
      !url ? "NEXT_PUBLIC_SUPABASE_URL" : null,
      !key ? "SUPABASE_SERVICE_ROLE_KEY" : null,
    ].filter(Boolean) as string[];

    throw new Error(
      `Missing Supabase env vars: ${missing.join(", ")}`
    );
  }

  return createClient(url, key);
}

function getSafeErrorMessage(message: string) {
  const isDev = process.env.NODE_ENV !== "production";

  return isDev ? message : "Something went wrong. Please try again.";
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
      .select("id, referral_code")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({
        ok: true,
        message: "Already on waitlist",
        data: existing,
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
      const insertError = error.message || "Failed to join waitlist";
      console.error("Insert error:", error);

      return NextResponse.json(
        {
          ok: false,
          error: getSafeErrorMessage(insertError),
          details: process.env.NODE_ENV !== "production" ? insertError : undefined,
        },
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
    const message = err instanceof Error ? err.message : "Unknown server error";
    console.error("Waitlist API error:", err);

    return NextResponse.json(
      {
        ok: false,
        error: getSafeErrorMessage(message),
        details: process.env.NODE_ENV !== "production" ? message : undefined,
      },
      { status: 500 }
    );
  }
}