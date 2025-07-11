"use client";

import React, { useEffect, useState } from "react";
import { Card, Typography, Col, Row } from "antd";

const { Title, Text } = Typography;

type Product = {
  title: string;
  quantity: number;
  price: number;
};

type Cart = {
  id: number;
  products: Product[];
  total: number;
  totalQuantity: number;
};

export default function CartsPage() {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data.carts);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 24, backgroundColor: "#fff", minHeight: "100vh" }}>
      <Title level={2}>Daftar Keranjang</Title>
      <Row gutter={[16, 16]}>
        {carts.map((cart) => (
          <Col key={cart.id} xs={24} sm={12} md={8} lg={6}>
            <Card title={`Cart ID: ${cart.id}`}>
              <Text>Total Barang: {cart.totalQuantity}</Text>
              <br />
              <Text>Total Harga: ${cart.total}</Text>
              <br />
              <br />
              <Text strong>Produk:</Text>
              <ul>
                {cart.products.map((product, index) => (
                  <li key={index}>
                    {product.title} — {product.quantity} pcs (${product.price})
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
