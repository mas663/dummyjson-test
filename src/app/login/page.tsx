"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Mencoba login dengan:", { username, password });

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Login Gagal:", data.message);
        return;
      }

      console.log("Login Berhasil:", data);
    } catch (err) {
      console.error("Gagal terhubung ke server:", err);
    }
  };

  const inputStyles =
    "w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <main className="p-10 font-sans bg-gray-50 min-h-screen text-black">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Contoh: emilys"
              required
              className={inputStyles}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contoh: emilyspass"
              required
              className={inputStyles}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border-none rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
