"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * @param e
   */
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password,
    };

    console.log("Mencoba mendaftarkan pengguna baru:", newUser);

    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(
          "Registrasi Gagal:",
          data.message || "Terjadi kesalahan yang tidak diketahui."
        );
        return;
      }

      console.log("Registrasi Berhasil:", data);
    } catch (err) {
      console.error("Gagal terhubung ke server:", err);
    }
  };

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
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Buat Akun Baru
        </h1>

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="firstName">Nama Depan:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="lastName">Nama Belakang:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              backgroundColor: "#28a745",
              color: "white",
              cursor: "pointer",
            }}
          >
            Daftar
          </button>
        </form>
      </div>
    </main>
  );
}
