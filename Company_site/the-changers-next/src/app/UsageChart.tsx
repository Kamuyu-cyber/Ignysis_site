'use client';
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function UsageChart({ dark }: { dark: boolean }) {
  const [usageData, setUsageData] = useState([
    { name: "Jan", users: 1200 },
    { name: "Feb", users: 1500 },
    { name: "Mar", users: 1700 },
    { name: "Apr", users: 1400 },
    { name: "May", users: 2100 },
    { name: "Jun", users: 1800 },
    { name: "Jul", users: 2200 },
    { name: "Aug", users: 2000 },
    { name: "Sep", users: 2300 },
    { name: "Oct", users: 2500 },
    { name: "Nov", users: 2400 },
    { name: "Dec", users: 2600 },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setUsageData((prev) => {
        const next = prev.slice(1).concat({
          name: prev[prev.length - 1].name,
          users: Math.max(1000, Math.round(prev[prev.length - 1].users + (Math.random() - 0.5) * 300)),
        });
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl h-[28rem] bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8 flex items-center border border-gray-200 dark:border-gray-800">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={usageData} margin={{ top: 20, right: 40, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#22c55e" fontSize={14} tickLine={false} axisLine={{ stroke: '#22c55e' }} />
          <YAxis stroke="#22c55e" fontSize={14} tickLine={false} axisLine={{ stroke: '#22c55e' }} />
          <Tooltip contentStyle={{ background: dark ? '#222' : '#fff', color: dark ? '#fff' : '#222', borderRadius: 12, border: 'none', fontSize: 15, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} />
          <Line type="monotone" dataKey="users" stroke="#22c55e" strokeWidth={4} dot={{ r: 4, fill: '#22c55e', stroke: '#fff', strokeWidth: 2 }} isAnimationActive={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 