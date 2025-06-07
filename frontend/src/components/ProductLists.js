import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader"; // import loader

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); //  loading state
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Simulate loading delay (you can replace with real API delay)
    const timeout = setTimeout(() => {
      setFilteredProducts(products);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [products]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        className="border px-3 py-2 rounded-md w-full md:w-1/3 mb-6"
        onChange={handleSearch}
        value={searchTerm}
      />

      {loading ? (
        <Loader /> // ✅ show loader while loading
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
