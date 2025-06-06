import React, { useState } from "react";
import ProductCard from "./ProductCard"; // assumes you already have this component

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        className="border px-3 py-2 rounded-md w-full md:w-1/3 mb-6"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
