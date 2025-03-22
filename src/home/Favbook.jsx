import { Link } from "react-router-dom";
import pct from "../assets/pct.jpg";

const Favbook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row items-center gap-12"> 
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src={pct} alt="Book Collection" className="w-full max-w-md rounded-lg shadow-md" />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold my-5 md:w-3/4 leading-snug">
          Find your favorite <span className="text-blue-700">book here!</span>
        </h2>
        <p className="mb-6 text-xl md:w-5/6 text-brack">
          If you want to read these books, look at the image, then choose the book you like and search for it at the top. After that, continue reading the following books.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-between gap-6 bg-gray-100 p-6 rounded-lg shadow-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-700">800+</h3>
            <p className="text-base text-gray-600">Book Listings</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-700">550+</h3>
            <p className="text-base text-gray-600">Registered Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-700">1200+</h3>
            <p className="text-base text-gray-600">PDF Downloads</p>
          </div>
        </div>

        {/* Explore More Button */}
        <Link to="/shop" className="mt-8 block">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Favbook;
