"use client";

import React, { useState } from "react";

export default function LoginPage() {
  // State untuk menyimpan username dan password dari input.
  // Diberi nilai awal string kosong ''.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Fungsi ini dijalankan saat tombol "Login" diklik.
   * @param e - Event dari form
   */
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    // Mencegah halaman me-refresh dirinya sendiri
    e.preventDefault();

    console.log("Mencoba login dengan:", { username, password });

    try {
      // 1. Mengirim permintaan (request) ke API dummyjson
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      // 2. Mengambil data JSON dari respons server
      const data = await response.json();

      // 3. Cek apakah respons dari server menandakan GAGAL
      if (!response.ok) {
        // Jika gagal, tampilkan pesan error ke console
        console.error("Login Gagal:", data.message);
        return; // Hentikan eksekusi
      }

      // 4. Jika respons menandakan SUKSES, tampilkan datanya di console
      console.log("Login Berhasil:", data);
    } catch (err) {
      // Blok ini akan berjalan jika ada masalah jaringan
      console.error("Gagal terhubung ke server:", err);
    }
  };

  // Ini adalah tampilan dari halaman Anda (HTML/JSX)
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        backgroundColor: "#f7fafc",
        minHeight: "100vh",
        color: "#000",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>

        {/* Form untuk input username dan password */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Contoh: emilys"
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contoh: emilyspass"
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#4299e1",
              color: "white",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
