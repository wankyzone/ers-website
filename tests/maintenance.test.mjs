import assert from "node:assert/strict";
import test from "node:test";
import { NextRequest } from "next/server.js";
import { proxy } from "../proxy.ts";
import { GET as getMaintenancePage } from "../app/maintenance/route.ts";

const originalMaintenanceMode = process.env.ERS_MAINTENANCE_MODE;

test.after(() => {
  if (originalMaintenanceMode === undefined) {
    delete process.env.ERS_MAINTENANCE_MODE;
  } else {
    process.env.ERS_MAINTENANCE_MODE = originalMaintenanceMode;
  }
});

test("maintenance endpoint returns a temporary 503 HTML response", async () => {
  const response = getMaintenancePage();
  const html = await response.text();

  assert.equal(response.status, 503);
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.equal(response.headers.get("cache-control"), "no-store, max-age=0");
  assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow");
  assert.match(html, /We’re making <span>ERS<\/span> even better\./);
  assert.match(html, /One connected marketplace/);
});

test("proxy leaves public routes unchanged when maintenance mode is disabled", () => {
  delete process.env.ERS_MAINTENANCE_MODE;

  const response = proxy(new NextRequest("https://ers.example/"));
  assert.equal(response.headers.get("x-middleware-next"), "1");
});

test("proxy rewrites public website routes to the maintenance endpoint", () => {
  process.env.ERS_MAINTENANCE_MODE = "true";

  const response = proxy(new NextRequest("https://ers.example/about?source=campaign"));
  assert.equal(
    response.headers.get("x-middleware-rewrite"),
    "https://ers.example/maintenance"
  );
});

test("proxy preserves admin, API, and static asset routes during maintenance", () => {
  process.env.ERS_MAINTENANCE_MODE = "true";

  for (const path of [
    "/admin",
    "/admin/reports",
    "/api/admin-auth",
    "/api/errands",
    "/_next/static/chunks/app.js",
    "/favicon.ico",
    "/ers-logo.svg",
    "/robots.txt",
    "/sitemap.xml",
    "/maintenance",
  ]) {
    const response = proxy(new NextRequest(`https://ers.example${path}`));
    assert.equal(response.headers.get("x-middleware-next"), "1", path);
  }
});
