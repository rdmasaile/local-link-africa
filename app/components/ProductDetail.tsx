import React from "react";

const ProductDetail = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Product Images */}
        <div className="space-y-4">
          <img
            src="https://via.placeholder.com/400"
            alt="Product Main"
            className="w-full h-auto object-cover"
          />
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://via.placeholder.com/100"
              alt="Product Thumb 1"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Product Thumb 2"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Product Thumb 3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            Raven Top With Colored Leaves Design
          </h1>

          {/* Ratings */}
          <div className="flex items-center space-x-2">
            <div className="text-gray-600">★★★★☆</div>
            <span>4.5</span>
            <span className="text-gray-400">(120 comments)</span>
          </div>

          {/* Size Selection */}
          <div>
            <h2 className="font-semibold">Select Size:</h2>
            <div className="space-x-4 mt-2">
              <button className="border px-4 py-2 rounded-lg">S</button>
              <button className="border px-4 py-2 rounded-lg">M</button>
              <button className="border px-4 py-2 rounded-lg">L</button>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h2 className="font-semibold">Colors Available:</h2>
            <div className="flex space-x-4 mt-2">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="w-6 h-6 rounded-full bg-gray-400"></div>
              <div className="w-6 h-6 rounded-full bg-white border"></div>
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div>
            <h2 className="text-2xl font-bold">$65.00</h2>
            <button className="bg-black text-white px-6 py-2 rounded-lg mt-4">
              Add to cart
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <p>🔒 Secure payment</p>
            <p>🛒 Free shipping</p>
            <p>🔁 Free Returns</p>
            <p>📏 Size & Fit Guide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
