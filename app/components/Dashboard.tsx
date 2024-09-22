"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-64 p-6 fixed h-full">
        <h2 className="text-2xl font-bold mb-8">LocalLinkAfrica</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-400">
            Popular Products
          </a>
          <a href="#" className="block font-bold">
            Explore New
          </a>
          <a href="#" className="block text-gray-400">
            Clothing and Shoes
          </a>
          <a href="#" className="block text-gray-400">
            Gifts and Living
          </a>
          <a href="#" className="block text-gray-400">
            Inspiration
          </a>
        </nav>
        <div className="mt-12">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              router.back();
            }}
          >
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Explore</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-full">
              Filters
            </button>
            <div className="bg-gray-200 rounded-full p-2">🔔</div>
            <div className="bg-gray-200 rounded-full p-2">👤 Reatile</div>
          </div>
        </header>

        {/* Explore Section */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-300 p-4 rounded-lg col-span-2">
            <h2 className="text-2xl font-bold">Get up to 50% OFF</h2>
            <p>Get Discount</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg col-span-1">
            <h2 className="text-lg font-semibold">Winter’s weekend</h2>
            <p>Keep it casual</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg col-span-1">
            <h2 className="text-lg font-semibold">Our Picks</h2>
            <p>WMX Rubber Zebra sandal</p>
            <p className="font-bold">$36</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg col-span-1">
            <h2 className="text-lg font-semibold">Your Choice</h2>
            <p>Super Skinny Jogger</p>
            <p className="font-bold">$89</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg col-span-1">
            <h2 className="text-lg font-semibold">Bring Bold Fashion</h2>
            <p>Layers on Layers</p>
          </div>
        </section>

        {/* Favourites Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Favourites</h2>
          <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Featured Look</h3>
              <p>Explore the best looks</p>
            </div>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-full">
              See All
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
