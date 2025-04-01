import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 mt-[100px]">
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
          <li>Community-driven discussions and reviews</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          At BusinessBooks, we envision a world where knowledge is the key to success. Our platform aims to bridge the gap between aspiring professionals and the knowledge they need to excel.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Curated Book Lists</h3>
            <p className="text-gray-700">Our team handpicks books that provide the most value for entrepreneurs and business professionals.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Exclusive Insights</h3>
            <p className="text-gray-700">We provide expert recommendations and summaries to help you make informed reading choices.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">User Reviews</h3>
            <p className="text-gray-700">Engage with our community and share your insights on books you've read.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Author Interviews</h3>
            <p className="text-gray-700">Gain deeper understanding through interviews with renowned business authors.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Meet the Team</h2>
        <p className="text-gray-700 mb-4">
          Our passionate team consists of business enthusiasts, researchers, and tech experts dedicated to delivering high-quality content and recommendations.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong> Medard</strong> - Founder & CEO</li>
          <li><strong>Gentille</strong> - Chief Content Officer</li>
          <li><strong>professeur Landry</strong> - Lead Developer</li>
          <li><strong> Docter Any Blaising</strong> - Marketing Strategist</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Get Involved</h2>
        <p className="text-gray-700 mb-4">
          Want to contribute? Join our community, share book reviews, or even become a guest writer for BusinessBooks.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          We'd love to hear from you! Whether you have book recommendations, feedback, or partnership inquiries, reach out to us at <a href="mailto:support@businessbooks.com" className="text-blue-600">support@businessbooks.com</a>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Follow Us</h2>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-blue-600 hover:underline">Twitter</a>
          <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>

        <p className="text-gray-700 mt-6 text-center font-medium">Join us on this journey of knowledge and business excellence. Happy reading!</p>
      </div>
    </div>
  );
};

export default About;
