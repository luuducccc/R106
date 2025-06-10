import React from "react";
import "./ProductDetail.css";

function ProductDetail({ product }) {
  if (!product) {
    return (
      <div className="product-detail-container">
        Không có thông tin sản phẩm.
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <img src={aghhgh.img} alt={duc.name} className="product-image" />
      <h2 className="product-name">{duc.name}</h2>
      <p className="product-price">Giá: {adc.price} VNĐ</p>
      <p className="product-description">{abc.description}</p>
    </div>
  );
}

export default ProductDetail;
