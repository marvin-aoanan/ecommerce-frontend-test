import React, { useState } from "react";
import toast from "react-hot-toast";
import Rating from "./Rating"; 
import '../styles/Card.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState("");

  // Mock stock availability (simulate using product.id for now)
  const isInStock = product.id % 4 !== 0;

  const mockVariants = ["Default", "Small", "Medium", "Large"];

  const handleAddToCart = () => {
    toast.success(`Added ${selectedVariant} to cart`);
    onAddToCart({ ...product, selectedVariant });
  };

  return (
    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" id={String(product.id)}>
      <div className="card card-custom h-100 shadow-sm rounded-4">
        <img
          className="card-img-top object-fit-contain p-3"
          src={product.image}
          alt={product.title}
          style={{ height: '250px' }}
        />
        <div className="card-body text-start">
          <h5 className="card-title fw-bold">
            {product.title.substring(0, 20)}...
          </h5>
          <Rating value={product.rating?.rate || 0} count={product.rating?.count} />
          <p className="card-text text-muted small mt-2">
            {product.description.substring(0, 90)}...
          </p>
         
          <label htmlFor={`variant-${product.id}`} className="form-label mb-0 d-none">
            Choose Variant
          </label>
          <select
            id={`variant-${product.id}`}
            className="form-select form-select-sm my-2"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            disabled={!isInStock}
          >
            <option >
              Choose Variant
            </option>
            {mockVariants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
          <div className="d-flex justify-content-between align-items-center mt-3">
          <h5 className="text-success fw-semibold mb-0">${product.price}</h5>
          
          {isInStock ? (
            <>
              <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </>
          ) : (
            <span className="badge bg-danger">Out of Stock</span>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
