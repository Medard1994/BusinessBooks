

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About BusinessBooks</h1>
        <p className="text-gray-700 mb-4">
          Welcome to <strong>BusinessBooks</strong>, your go-to platform for exploring a vast collection of books and resources dedicated to business, entrepreneurship, and professional growth.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to provide readers with insightful books covering topics like marketing, finance, leadership, and business strategy. Whether you're a startup founder, an aspiring entrepreneur, or a corporate professional, we have something for you!
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Wide range of business-related books</li>
          <li>Easy-to-navigate platform</li>
          <li>Updated with the latest business trends</li>
          <li>Expert book recommendations</li>
        </ul>
        <p className="text-gray-700 mt-6">
          Join us on this journey of knowledge and business excellence. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default About;
