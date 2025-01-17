"use client";
import { useState } from "react";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [value, setValue] = useState("");
  return (
    <div>
      <h3>Auth Layout</h3>
      <input
        className="p-3 bg-slate-200 max-w-3xl"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {children}
    </div>
  );
}
