import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function generateCode() {
  return Math.random().toString(36).substring(2, 8);
}

export async function POST(req: Request) {
  const { email, referralCode } = await req.json();

  const code = generateCode();

  const { data, error } = await supabase
    .from("waitlist")
    .insert({
      email,
      referral_code: code,
      referred_by: referralCode || null,
    })
    .select()
    .single();

  // 🔥 increment referrer
  if (referralCode) {
    await supabase.rpc("increment_referrals", {
      code_input: referralCode,
    });
  }

  return NextResponse.json({ data, error });
}