const maintenanceHtml = String.raw`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="theme-color" content="#07110b" />
  <title>Scheduled maintenance | ERS</title>
  <meta name="description" content="ERS is undergoing scheduled platform improvements. We'll be back online soon." />
  <style>
    :root { color-scheme: dark; --green: #19c963; --ink: #07110b; --muted: #b6c0b9; }
    * { box-sizing: border-box; }
    html, body { min-height: 100%; margin: 0; }
    body {
      min-height: 100vh; overflow-x: hidden; color: #f7faf8;
      background:
        radial-gradient(ellipse at 50% 12%, rgba(25,201,99,.13), transparent 42%),
        linear-gradient(180deg, #07110b 0%, #050907 68%, #020504 100%);
      font-family: Arial, Helvetica, sans-serif;
    }
    .notice {
      min-height: 46px; display: flex; align-items: center; justify-content: center;
      gap: 12px; padding: 10px 20px; border-bottom: 1px solid rgba(246,181,50,.45);
      background: rgba(74,48,4,.35); color: #e9e8e1; text-align: center; font-size: 14px;
    }
    .notice strong { color: #f5bd36; font-weight: 700; }
    .notice .dot { color: #f5bd36; }
    main {
      width: min(100% - 40px, 1120px); min-height: calc(100vh - 46px);
      margin: 0 auto; display: flex; flex-direction: column; align-items: center;
      text-align: center; padding: clamp(42px, 7vh, 76px) 0 34px; position: relative;
    }
    .brand { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 46px; }
    .brand-mark {
      width: 42px; height: 42px; display: grid; place-items: center;
      border-radius: 12px; background: var(--green); color: #061009;
      font-size: 27px; font-weight: 900; letter-spacing: -4px; padding-right: 4px;
      box-shadow: 0 0 34px rgba(25,201,99,.22);
    }
    .brand-name { font-size: 34px; line-height: 1; font-weight: 800; letter-spacing: 1px; }
    .eyebrow {
      display: inline-flex; align-items: center; gap: 9px; padding: 10px 17px;
      border: 1px solid rgba(25,201,99,.55); border-radius: 999px;
      color: #40e581; background: rgba(25,201,99,.07); font-size: 12px;
      font-weight: 700; letter-spacing: .11em; text-transform: uppercase;
    }
    .eyebrow svg { width: 16px; height: 16px; }
    h1 {
      max-width: 940px; margin: 25px 0 14px; font-size: clamp(38px, 6.2vw, 72px);
      line-height: 1.04; letter-spacing: -.055em; font-weight: 800;
    }
    h1 span { color: var(--green); }
    .intro {
      max-width: 710px; margin: 0 auto; color: #c2cbc5;
      font-size: clamp(16px, 2vw, 20px); line-height: 1.65;
    }
    .visual {
      width: min(100%, 780px); height: 220px; margin: 28px auto 15px;
      position: relative; display: flex; align-items: center; justify-content: center;
    }
    .orbit {
      position: absolute; width: 76%; height: 116px; border: 1px solid rgba(25,201,99,.55);
      border-radius: 50%; transform: perspective(400px) rotateX(58deg);
      box-shadow: 0 0 34px rgba(25,201,99,.08);
    }
    .node {
      position: absolute; width: 72px; height: 62px; display: grid; place-items: center;
      border: 1px solid rgba(25,201,99,.55); border-radius: 17px;
      background: linear-gradient(145deg, rgba(19,76,42,.82), rgba(4,19,11,.96));
      box-shadow: 0 12px 34px rgba(0,0,0,.34), 0 0 25px rgba(25,201,99,.12);
      color: #e9fff1;
    }
    .node svg { width: 30px; height: 30px; stroke: currentColor; fill: none; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
    .node.center { width: 124px; height: 94px; border-radius: 23px; color: #fff; background: linear-gradient(145deg, #14783c, #07351c); }
    .node.center svg { width: 43px; height: 43px; }
    .node.left { left: 9%; top: 84px; }
    .node.right { right: 9%; top: 84px; }
    .node.bottom { left: calc(50% - 36px); bottom: 0; }
    .spark { position: absolute; width: 9px; height: 9px; border-radius: 50%; background: #54f28c; box-shadow: 0 0 14px #54f28c; }
    .spark.one { left: 23%; top: 101px; } .spark.two { right: 23%; top: 101px; }
    .spark.three { left: 50%; bottom: 39px; }
    .thanks { margin: 6px 0 8px; font-size: clamp(19px, 2.5vw, 25px); font-weight: 700; }
    .tagline { margin: 0; color: #39dc78; font-size: 16px; font-weight: 700; }
    footer { margin-top: auto; padding-top: 36px; color: #849188; font-size: 12px; letter-spacing: .02em; }
    @media (max-width: 560px) {
      .notice { font-size: 12px; gap: 8px; }
      main { width: min(100% - 28px, 1120px); padding-top: 48px; }
      .brand { margin-bottom: 38px; }
      .brand-name { font-size: 30px; }
      .visual { height: 180px; margin-top: 24px; }
      .orbit { width: 86%; }
      .node { width: 58px; height: 54px; border-radius: 14px; }
      .node.left { left: 0; top: 70px; }
      .node.right { right: 0; top: 70px; }
      .node.bottom { left: calc(50% - 29px); }
      .node.center { width: 100px; height: 78px; }
      .spark.one { left: 19%; top: 91px; } .spark.two { right: 19%; top: 91px; }
    }
    @media (prefers-reduced-motion: no-preference) {
      .spark { animation: pulse 2.4s ease-in-out infinite; }
      .spark.two { animation-delay: .8s; } .spark.three { animation-delay: 1.6s; }
      @keyframes pulse { 0%,100% { opacity: .55; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.25); } }
    }
  </style>
</head>
<body>
  <div class="notice"><span class="dot" aria-hidden="true">●</span><strong>Technical maintenance</strong><span aria-hidden="true">|</span><span>ERS is temporarily offline for scheduled improvements.</span></div>
  <main>
    <div class="brand" aria-label="ERS">
      <div class="brand-mark" aria-hidden="true">E</div>
      <div class="brand-name">ERS</div>
    </div>
    <div class="eyebrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42m-9.88 9.88-1.42 1.42"/><circle cx="12" cy="12" r="5"/></svg>
      Platform improvements in progress
    </div>
    <h1>We’re making <span>ERS</span> even better.</h1>
    <p class="intro">Our marketplace is undergoing scheduled maintenance as we improve the platform and prepare for the next chapter. We’ll be back online soon.</p>
    <div class="visual" aria-hidden="true">
      <div class="orbit"></div>
      <div class="node left"><svg viewBox="0 0 24 24"><path d="m3 8 9-5 9 5-9 5-9-5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9m-4-16 9 5"/></svg></div>
      <div class="node center"><svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h2l2.6 12.2a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L22 8H5"/></svg></div>
      <div class="node right"><svg viewBox="0 0 24 24"><path d="M3 16h13l3-4h2l1 4v2h-3m-11 0h7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M7 10h7l2 3"/></svg></div>
      <div class="node bottom"><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20v-2a6 6 0 0 1 12 0v2m0-3a4.5 4.5 0 0 1 8 3"/></svg></div>
      <i class="spark one"></i><i class="spark two"></i><i class="spark three"></i>
    </div>
    <p class="thanks">Thank you for your patience.</p>
    <p class="tagline">ERS — One connected marketplace.</p>
    <footer>© ERS. Built for a more connected everyday.</footer>
  </main>
</body>
</html>`;

function maintenanceResponse() {
  return new Response(maintenanceHtml, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export function GET() {
  return maintenanceResponse();
}

// Ensure non-GET public requests also receive a clear temporary-unavailable
// response instead of a method-not-allowed page after the maintenance rewrite.
export const HEAD = GET;
export const POST = GET;
export const PUT = GET;
export const PATCH = GET;
export const DELETE = GET;
