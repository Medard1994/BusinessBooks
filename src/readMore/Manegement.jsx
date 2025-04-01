import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Management = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-4xl font-bold text-center mb-6">
        The Impact of Financial Management in Business
      </h1>
      <p className="text-lg text-gray-700 text-center">
        A deep dive into how financial management can drive success in your business operations.
      </p>

      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold">What is Financial Management?</h2>
        <p className="text-gray-600">
          Financial management is the <strong>process of planning, organizing, controlling, and monitoring financial resources</strong> to achieve business goals. Proper financial management helps businesses stay profitable, minimize risks, and ensure long-term stability.
        </p>

        <h2 className="text-2xl font-semibold">Key Aspects of Financial Management</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Budgeting:</strong> Creating a financial plan to track income and expenses.</li>
          <li><strong>Cash Flow Management:</strong> Ensuring smooth operations by maintaining liquidity.</li>
          <li><strong>Investment Planning:</strong> Allocating funds wisely for business growth.</li>
          <li><strong>Risk Management:</strong> Identifying and mitigating financial risks.</li>
          <li><strong>Tax Planning:</strong> Managing taxes efficiently to reduce liabilities.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Why is Financial Management Important?</h2>
        <p className="text-gray-600">Effective financial management is <strong>critical</strong> for businesses to:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Improve profitability and make informed decisions.</li>
          <li>Maintain financial stability and avoid debt issues.</li>
          <li>Attract investors and gain business funding.</li>
          <li>Ensure long-term sustainability and growth.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Recommended Books on Financial Management</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <a href="https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612681131"
               target="_blank" rel="noopener noreferrer"
               className="text-blue-600 hover:underline">
              Rich Dad Poor Dad – Robert Kiyosaki
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Intelligent-Investor-Definitive-Value-Investing/dp/0060555661"
               target="_blank" rel="noopener noreferrer"
               className="text-blue-600 hover:underline">
              The Intelligent Investor – Benjamin Graham
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119"
               target="_blank" rel="noopener noreferrer"
               className="text-blue-600 hover:underline">
              Financial Intelligence – Karen Berman & Joe Knight
            </a>
          </li>
        </ul>

        {/* Styled Swiper Component */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            className="mt-4"
          >
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/I/91L0La1pwDL._SL1500_.jpg" 
                   alt="Rich Dad Poor Dad" 
                   className="w-full h-auto max-h-[400px] object-cover mx-auto rounded-lg shadow-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg" 
                   alt="The Intelligent Investor" 
                   className="w-full h-auto max-h-[400px] object-cover mx-auto rounded-lg shadow-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://m.media-amazon.com/images/I/71+vN6aVY+L._SL1500_.jpg" 
                   alt="Financial Intelligence" 
                   className="w-full h-auto max-h-[400px] object-cover mx-auto rounded-lg shadow-md" />
            </SwiperSlide>
          </Swiper>
        </div>

        <p className="text-gray-600 mt-6">
          Mastering financial management is essential for <strong>business success</strong>. By understanding financial principles and making smart money decisions, businesses can <strong>increase profitability, reduce risks, and grow sustainably</strong>.
        </p>
      </div>
    </div>
  );
};

export default Management;
