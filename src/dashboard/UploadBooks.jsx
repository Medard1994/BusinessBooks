import React, { useState } from "react";
import { Button, Label, TextInput, Select, Textarea, Spinner } from "flowbite-react";

const UploadBooks = () => {
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    imageURL: "",
    category: "",
    bookDescription: "",
    bookPdfURL: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch("https://backend-book-5gk7.onrender.com/upload-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("✅ Your book has been uploaded successfully!");
        setFormData({ title: "", authorName: "", imageURL: "", category: "", bookDescription: "", bookPdfURL: "" });
      } else {
        throw new Error("Failed to upload book.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error uploading book. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="ml-56 flex justify-center items-center min-h-screen bg-gray-100 -mt-[100px]">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Upload A Book</h2>

        {/* Form Fields */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Book Title */}
          <div className="flex flex-col">
            <Label htmlFor="title" value="Book Title" className="mb-2 text-md font-medium" />
            <TextInput
              id="title"
              name="title"
              placeholder="Enter Book Title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            />
          </div>

          {/* Author Name */}
          <div className="flex flex-col">
            <Label htmlFor="authorName" value="Author Name" className="mb-2 text-md font-medium" />
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Enter Author Name"
              type="text"
              value={formData.authorName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            />
          </div>

          {/* Book Image URL */}
          <div className="flex flex-col">
            <Label htmlFor="imageURL" value="Book Image URL" className="mb-2 text-md font-medium" />
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Enter Image URL"
              type="text"
              value={formData.imageURL}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            />
          </div>

          {/* Book Category */}
          <div className="flex flex-col">
            <Label htmlFor="category" value="Book Category" className="mb-2 text-md font-medium" />
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full sm:w-[400px]"
            >
              <option value="">Select Category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="science-fiction">Science Fiction</option>
            </Select>
          </div>

          {/* Book Description and Book PDF URL on Same Line */}
          <div className="col-span-2 flex flex-wrap gap-6">
            {/* Book Description */}
            <div className="flex flex-col w-full sm:w-[48%]">
              <Label htmlFor="bookDescription" value="Book Description" className="mb-2 text-md font-medium" />
              <Textarea
                id="bookDescription"
                name="bookDescription"
                placeholder="Write your book description..."
                rows={6}
                value={formData.bookDescription}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full"
              />
            </div>

            {/* Book PDF URL */}
            <div className="flex flex-col w-full sm:w-[48%]">
              <Label htmlFor="bookPdfURL" value="Book PDF URL" className="mb-2 text-md font-medium" />
              <TextInput
                id="bookPdfURL"
                name="bookPdfURL"
                placeholder="Enter Book PDF URL"
                type="text"
                value={formData.bookPdfURL}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-600 w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <Button
              type="submit"
              className="w-full max-w-xs text-lg p-2 bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium flex justify-center items-center focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? <Spinner size="sm" className="mr-2" /> : "Upload Book"}
            </Button>
          </div>
        </form>

        {/* Success Message */}
        {successMessage && <p className="mt-4 text-center text-green-600 font-semibold">{successMessage}</p>}
      </div>
    </div>
  );
};

export default UploadBooks;
