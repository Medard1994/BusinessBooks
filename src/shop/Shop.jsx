import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetch("https://backend-book-5gk7.onrender.com/all-books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books.");
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (book) => {
    if (!book || !book._id || !book.title) {
      alert("Error: Book details are missing.");
      return;
    }
    navigate(`/checkout/${book._id}`); // Use navigate to redirect
  };

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      {loading && <p className="text-center text-xl font-semibold mt-5">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-5">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {books.map((book, index) => {
            if (!book._id || !book.title) {
              console.warn(`Skipping book at index ${index} due to missing details:`, book);
              return null;
            }
            return (
              <Card key={book._id} className="p-4 shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={book.imageURL || "https://via.placeholder.com/300"}
                  alt={book.title}
                  className="h-96 w-full object-cover rounded-lg"
                />
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                  {book.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {book.bookDescription || "Description not available."}
                </p>
                <button
                  onClick={() => handleBuyNow(book)}
                  className="bg-blue-700 hover:bg-blue-800 font-semibold text-white py-2 px-4 rounded mt-3 w-full transition duration-300"
                >
                  Buy Now
                </button>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Shop;
