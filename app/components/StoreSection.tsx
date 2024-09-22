import React from "react";
// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

const StoreSection = () => {
  return (
    <div className="w-[90%] m-auto py-16">
      {/* Store Header */}
      <h2 className="text-4xl font-bold text-center mb-10">
        Simple and beautiful store
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product 1 - Soft Tee */}
        <Link
          href="/product/soft-tee"
          className="block text-center hover:shadow-lg"
        >
          <div className="bg-gray-100 p-4">
            <Image
              src={"https://via.placeholder.com/300"}
              alt="Soft Tee"
              className="mx-auto mb-4"
              width={300}
              height={300}
            />
          </div>
          <p className="text-lg font-semibold mt-2">SOFT TEE</p>
          <p className="text-gray-600">$20.00</p>
        </Link>

        {/* Product 2 - City Poster (Sale) */}
        <Link
          href="/product/city-poster"
          className="block relative text-center hover:shadow-lg"
        >
          <div className="bg-gray-100 p-4">
            <Image
              src={"https://via.placeholder.com/300"}
              alt="City Poster"
              className="mx-auto mb-4"
              width={300}
              height={300}
            />
          </div>
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1">
            SALE!
          </div>
          <p className="text-lg font-semibold mt-2">CITY POSTER</p>
          <p className="text-gray-500 line-through">$15.00</p>
          <p className="text-gray-900">$10.00</p>
        </Link>

        {/* Product 3 - City Vinyl (Sale) */}
        <Link
          href="/product/city-vinyl"
          className="block relative text-center hover:shadow-lg"
        >
          <div className="bg-gray-100 p-4">
            <Image
              src={"https://via.placeholder.com/300"}
              alt="City Vinyl"
              className="mx-auto mb-4"
              width={300}
              height={300}
            />
          </div>
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1">
            SALE!
          </div>
          <p className="text-lg font-semibold mt-2">CITY VINYL</p>
          <p className="text-gray-500 line-through">$45.00</p>
          <p className="text-gray-900">$35.00</p>
        </Link>
      </div>

      {/* View Store Button */}
      <div className="text-center mt-10">
        <Link href="/store">
          <button className="bg-purple-500 text-white px-8 py-3 rounded-md hover:bg-purple-600">
            VIEW STORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StoreSection;
