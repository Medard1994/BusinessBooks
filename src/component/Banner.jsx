import BannerCard from "../home/BannerCard";

const Banner = () => {
    return (
      <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
        <div className="flex w-full flex-col items-center justify-between gap-12 py-20 lg:py-40"> 
            {/* Left side */}
          <div className="flex w-full flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-black text-center lg:text-left">
                Buy and sell your Books <span className="text-blue-700">for the best prices</span>
              </h2>
              <p className="text-gray-700 text-center lg:text-left md:w-4/5">
                Welcome to the BusinessBooks website! BusinessBooks has arrived as the ultimate solution for those seeking to read all the latest information related to business. Feel at home and explore!
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <BannerCard />
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex w-full max-w-md mx-auto mt-6 lg:mt-0">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-4 rounded-l-md outline-none border border-gray-300 w-full"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
