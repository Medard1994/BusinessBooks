import React from "react";
import { Link } from "react-router-dom";

// Sample data (replace with dynamic data from your API or database)
const blogPosts = [
  {
    id: 1,
    title: "The Top 5 Business Books You Must Read",
    excerpt: "Discover the top 5 books that every entrepreneur should read to succeed in business.",
    date: "March 22, 2025",
  },
  {
    id: 2,
    title: "How to Grow Your Business with Strategic Thinking",
    excerpt: "Learn how strategic thinking can help you grow your business and stay ahead of the competition.",
    date: "March 18, 2025",
  },
  {
    id: 3,
    title: "The Impact of Financial Management in Business",
    excerpt: "A deep dive into how financial management can drive success in your business operations.",
    date: "March 12, 2025",
  },
];

const Blog = () => {
  return (
    <div className="brog-container max-w-screen-lg mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-3xl font-bold text-center mb-8">Business Book Blog</h1>

      <div className="brog-posts space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="brog-post border-b pb-4">
            <h2 className="text-2xl font-semibold">
              {/* Clicking the title will navigate to a new post page */}
              <Link
                to={`/brog/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-lg">{post.excerpt}</p>
            <Link
              to={`/brog/${post.id}`}
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              Read more...
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
