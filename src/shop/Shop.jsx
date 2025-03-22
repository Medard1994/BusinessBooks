import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-book-5gk7.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false); // Fix: Update loading state
      })
      .catch(() => setLoading(false)); // Ensure loading stops even if fetch fails
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
      {loading ? (
        <p className="text-center text-xl font-semibold mt-5">Loading...</p>
      ) : (
        <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {books.map((book) => (
            <Card key={book.id} className="p-4">
              <img src={book.imageURL} alt={book.bookTitle} className="h-96 w-full object-cover" />
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.description || "No description available."}
              </p>
              <button className="bg-blue-700 font-semibold text-white py-2 px-4 rounded mt-3">
                Buy Now
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
