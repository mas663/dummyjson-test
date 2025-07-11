"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "antd";

const { Text } = Typography;

type TestResponse = {
  status: string;
  method: string;
};

export default function TestPage() {
  const [test, setTest] = useState<TestResponse | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/test")
      .then((res) => res.json())
      .then(setTest);
  }, []);

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", height: "100vh" }}>
      <Text>Response yang diberikan oleh status: {test?.status}</Text> <br />
      <Text>Response yang diberikan oleh method: {test?.method}</Text>
    </div>
  );
}
