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
  const [page, setPage] = useState(1);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const pageSize = 10;

  // 🔐 Auth
  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      alert("Wrong password");
    }
  };

  // 📡 Fetch + Realtime
  useEffect(() => {
    let channel: RealtimeChannel;

    const init = async () => {
      const { data } = await supabase
        .from("waitlist")
        .select("*")
        .order("referrals_count", { ascending: false }); // 🔥 leaderboard

      setUsers(data || []);

      // 🔥 REALTIME
      channel = supabase
        .channel("waitlist-realtime")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "waitlist",
          },
          (payload) => {
            const newUser = payload.new as WaitlistUser;

            setUsers((prev) => [newUser, ...prev]);
          }
        )
        .subscribe();
    };

    init();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  // 🔍 Filter (NO setState = correct)
  const filtered = useMemo(() => {
    return users.filter((u) =>
      u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // 📄 Smart pagination (no effect needed)
  const currentPage = search ? 1 : page;

  const start = (currentPage - 1) * pageSize;
  const paginated = filtered.slice(start, start + pageSize);

  // ⬇️ CSV
  const exportCSV = () => {
    const rows = filtered.map(
      (u) =>
        `${u.email},${u.referrals_count || 0},${u.created_at}`
    );

    const csv = ["Email,Referrals,Joined", ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "waitlist.csv";
    a.click();
  };

  // 🔐 Login UI
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
            className="w-full bg-[#1ED760] text-black py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-6xl mx-auto text-white">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Waitlist Growth Dashboard 🚀
        </h1>

        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-[#1ED760] text-black rounded"
        >
          Export CSV
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search email..."
        className="mb-6 px-4 py-2 bg-[#111217] border border-white/10 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Stats */}
      <p className="text-sm text-gray-400 mb-4">
        Total Users: {filtered.length}
      </p>

      {/* Table */}
      <div className="bg-[#111217] border border-white/10 rounded-xl p-4">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-white/10">
            <tr>
              <th className="text-left py-2">Rank</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Referrals</th>
              <th className="text-left py-2">Joined</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((u, i) => (
              <tr key={u.id} className="border-b border-white/5">
                <td className="py-2 font-semibold text-[#1ED760]">
                  #{start + i + 1}
                </td>
                <td className="py-2">{u.email}</td>
                <td className="py-2">
                  {u.referrals_count || 0}
                </td>
                <td className="py-2">
                  {new Date(u.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 border border-white/10 rounded"
        >
          Prev
        </button>

        <span className="px-3 py-1 text-sm">
          Page {currentPage}
        </span>

        <button
          onClick={() =>
            setPage((p) =>
              p * pageSize < filtered.length ? p + 1 : p
            )
          }
          className="px-3 py-1 border border-white/10 rounded"
        >
          Next
        </button>
      </div>

    </div>
  );
}