import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://backend-book-5gk7.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Handle delete request
  const handleDelete = async (id) => {
    console.log("Deleting book with ID:", id);

    try {
      const res = await fetch(`https://backend-book-5gk7.onrender.com/book/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        alert("Book deleted successfully");
        setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      } else {
        alert("Failed to delete book: " + data.message);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="ml-48 px-4 my-12 -mt-[100px]">
      <h2 className="text-3xl font-bold mb-8">Manage Books Page</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Author Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Edit or Manage</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {allBooks.map((book, index) => (
            <tr key={book._id} className="bg-white">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{book.authorName}</td>
              <td className="border border-gray-300 px-4 py-2">${book.price}</td>
              <td className="border border-gray-300 px-4 py-2">{book.category}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/admin/dashboard/edit-book/${book._id}`} className="text-blue-600 hover:underline mr-4">Edit</Link>

                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 px-4 py-1 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
