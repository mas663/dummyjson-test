"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState(""); // FIX: Kelima state ini dapat digabungkan menjadi satu state object untuk mempermudah pengelolaan form.
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /** // FIX: Komentar JSDoc ini kosong dan tidak memberikan informasi, sebaiknya dihapus atau diisi.
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

  // Kelas bersama untuk input agar tidak terjadi pengulangan kode (DRY)
  const inputStyles =
    "w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";

  return (
    <main className="p-10 font-sans bg-gray-50 min-h-screen text-black">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Buat Akun Baru</h1>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="firstName">Nama Depan:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className={inputStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName">Nama Belakang:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className={inputStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={inputStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              className={inputStyles}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border-none rounded-md bg-green-600 text-white cursor-pointer hover:bg-green-700 transition-colors"
          >
            Daftar
          </button>
        </form>
      </div>
    </main>
  );
}
