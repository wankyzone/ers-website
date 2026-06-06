"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { RealtimeChannel } from "@supabase/supabase-js";

type WaitlistUser = {
  id: string;
  email: string;
  created_at: string;
  referral_code?: string;
  referrals_count?: number;
};

export default function AdminPage() {
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [search, setSearch] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 LOGIN
  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) throw new Error();

      setAuthorized(true);
    } catch {
      alert("Wrong password");
    } finally {
      setLoading(false);
    }
  };

  // 🔓 LOGOUT
  const handleLogout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    window.location.reload();
  };

  // 📡 FETCH + REALTIME
  useEffect(() => {
    if (!authorized) return;

    let channel: RealtimeChannel | null = null;

    const init = async () => {
      const { data, error } = await supabase
        .from("waitlist")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setUsers(data || []);

      // ✅ Properly typed channel
      channel = supabase
        .channel("admin-live")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "waitlist",
          },
          (payload) => {
            const newUser = payload.new as WaitlistUser;

            // 🔔 ALERT
            alert(`🚀 New signup: ${newUser.email}`);

            setUsers((prev) => [newUser, ...prev]);
          }
        )
        .subscribe();
    };

    init();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [authorized]);

  // 🔍 FILTER
  const filtered = useMemo(() => {
    return users.filter((u) =>
      u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // 📊 ANALYTICS
  const totalUsers = users.length;

  const totalReferrals = users.reduce(
    (acc, u) => acc + (u.referrals_count || 0),
    0
  );

  const topReferrer =
    users.length > 0
      ? users.reduce((prev, current) =>
          (current.referrals_count || 0) >
          (prev.referrals_count || 0)
            ? current
            : prev
        )
      : null;

  // 🧨 DELETE USER
  const deleteUser = async (id: string) => {
    const confirmDelete = confirm("Delete this user?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("waitlist")
      .delete()
      .eq("id", id);

    if (!error) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  // 🔐 LOGIN SCREEN
  if (!authorized) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-[#111217] p-6 rounded-xl border border-white/10 w-[300px]">
          <h2 className="mb-4 font-semibold">Admin Login</h2>

          <input
            type="password"
            placeholder="Enter password"
            className="px-4 py-2 bg-black border border-white/10 rounded w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#1ED760] text-black py-2 rounded"
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </div>
      </div>
    );
  }

  // ✅ DASHBOARD
  return (
    <div className="p-10 max-w-6xl mx-auto text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          ERS Admin Control Panel ⚡
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-white/10 rounded"
        >
          Logout
        </button>
      </div>

      {/* ANALYTICS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#111217] p-6 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Total Users</p>
          <p className="text-2xl font-bold text-[#1ED760] mt-2">
            {totalUsers}
          </p>
        </div>

        <div className="bg-[#111217] p-6 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Total Referrals</p>
          <p className="text-2xl font-bold text-[#1ED760] mt-2">
            {totalReferrals}
          </p>
        </div>

        <div className="bg-[#111217] p-6 rounded-xl border border-white/10">
          <p className="text-gray-400 text-sm">Top Referrer</p>
          <p className="text-sm mt-2">
            {topReferrer?.email || "—"}
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search email..."
        className="mb-6 px-4 py-2 bg-[#111217] border border-white/10 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="bg-[#111217] border border-white/10 rounded-xl p-4">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-white/10">
            <tr>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Referrals</th>
              <th className="text-left py-2">Joined</th>
              <th className="text-left py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-white/5">
                <td className="py-2">{u.email}</td>
                <td className="py-2">
                  {u.referrals_count || 0}
                </td>
                <td className="py-2">
                  {new Date(u.created_at).toLocaleString()}
                </td>

                <td className="py-2">
                  <button
                    onClick={() => deleteUser(u.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}