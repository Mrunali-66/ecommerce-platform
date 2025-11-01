import React from "react";
import { Users, Star, ShoppingBag } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Welcome to <span className="text-indigo-600 font-semibold">ShopEase</span> — your one-stop destination for quality products and a smooth shopping experience.  
        We’re dedicated to delivering excellence with every click.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <Users size={40} className="text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-600 text-sm">
            A passionate team of creators, designers, and developers working together to build something special.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md">
          <Star size={40} className="text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm">
            To make online shopping delightful and accessible to everyone — combining quality with simplicity.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md">
          <ShoppingBag size={40} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Products</h3>
          <p className="text-gray-600 text-sm">
            We handpick every product to ensure it meets the highest standards of quality and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
