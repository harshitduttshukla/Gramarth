import React, { useState } from 'react';
<<<<<<< HEAD
import img1 from './img/Basket.png';
=======

// Import images from the `img` folder within `Home`
// import img1 from './img/Basket.png';
>>>>>>> 71b592a93395e80ccd8ea5c2478e5c66c98de2da
import img2 from './img/Wood Lac Turnery.png';
import img3 from './img/wall painting.png';
import img4 from './img/terracotta ware dl.png';
import img5 from './img/cane haversacks ArP.png';
import img6 from './img/Bell Metalware Odisa.png';
import img7 from './img/Leather Toys mp.png';
import img8 from './img/Bamboo Fluite up.png';
import img9 from './img/Khunda-Bamboo staves.png';
import img10 from './img/jute craft.png';
import img11 from './img/Veena String Instrument.png';
import img12 from './img/Kohlapuri chappal.png';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    // { id: 1, name: "Handmade Basket", image: img1, price: "₹50", description: "Mumbai" },
    { id: 2, name: "Wood Lac Turnery", image: img2, price: "₹300", description: "Gujarat" },
    { id: 3, name: "Wall Painting", image: img3, price: "₹500", description: "Jharkhand" },
    { id: 4, name: "Terracotta Ware", image: img4, price: "₹1500", description: "Delhi" },
    { id: 5, name: "Cane Haversacks", image: img5, price: "₹500", description: "Arunachal Pradesh" },
    { id: 6, name: "Bell Metalware", image: img6, price: "₹450", description: "Odisha" },
    { id: 7, name: "Leather Toys", image: img7, price: "₹500", description: "Madhya Pradesh" },
    { id: 8, name: "Bamboo Flute", image: img8, price: "₹99", description: "Uttar Pradesh" },
    { id: 9, name: "Khunda-Bamboo staves", image: img9, price: "₹499", description: "Punjab" },
    { id: 10, name: "Jute Craft", image: img10, price: "₹299", description: "Andhar Pradesh" },
    { id: 11, name: "Veena String Instrumrnt", image: img11, price: "₹2999", description: "Andhar Pradesh" },
    { id: 12, name: "Kohlapuri chappal", image: img12, price: "₹599", description: "MAharashtra" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-teal-400 mb-6">
        Welcome to Our Handicraft Marketplace
      </h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full max-w-md p-3 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-700 rounded-lg shadow-md bg-gray-800 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-100 mb-2">{product.name}</h2>
              <p className="text-teal-400 font-semibold">{product.price}</p>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              <button className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products match your search.</p>
      )}
    </div>
  );
}

export default Home;
