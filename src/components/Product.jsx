import React from 'react';

function Product({ product }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "15px", display: "flex", flexDirection: "column", gap: "5px" }}>
        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "#333" }}>
          {product.description}
        </h2>
        <span
          style={{
            background: "#ff4d4d",
            color: "white",
            padding: "5px 10px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "bold",
            alignSelf: "flex-start",
          }}
        >
          {product.id} minutes
        </span>
      </div>
    </div>
  );
}

export default Product;
