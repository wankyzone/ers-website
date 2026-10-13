import { cookies } from "next/headers";
import AdminDashboard from "./admin-dashboard";
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSession,
} from "../../lib/admin-session";

export default async function AdminPage() {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  const initiallyAuthorized = await verifyAdminSession(session);

  return <AdminDashboard initiallyAuthorized={initiallyAuthorized} />;
}
