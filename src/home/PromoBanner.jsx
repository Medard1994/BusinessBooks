

import { Link } from "react-router-dom";
import awarbk from "../assets/awarbk.png";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24 flex ">
      <div className="flex  md:flex-col justify-between  items-center gap-12">
        <h3 className="text-4xl font-bold mb-6 leading-snug">
          2025 National Book Awards for Fiction Shortlist
        </h3>
        <Link to="/shop" className="inline-block mt-6">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-black transition-all duration-300">
            Get promo code
          </button>
        </Link>
      </div>
      <div>
        <img src={awarbk} alt="awarbook" className="w-96"/>
      </div>
    </div>
  );
};

export default PromoBanner;

