"use client";

import React, { useEffect, useState } from "react";
import { Typography, Spin } from "antd";

const { Title, Text } = Typography;

type User = {
  id: number;
  firstName: string;
  age: number;
};

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1") // ambil 1 user saja sebagai contoh
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading || !user) {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", height: "100vh" }}>
      <Title level={1}>User Page</Title>
      <Text>ID: {user.id}</Text>
      <br />
      <Text>Name: {user.firstName}</Text>
      <br />
      <Text>Age: {user.age}</Text>
    </div>
  );
}
