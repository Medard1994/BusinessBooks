import React from "react";
import { Link } from "react-router-dom";

// Sample data (replace with dynamic data from your API or database)
const blogPosts = [
  {
    id: 1,
    title: "The Top 5 Business Books You Must Read",
    excerpt: "Discover the top 5 books that every entrepreneur should read to succeed in business. Reading business books expands knowledge, sharpens decision-making skills, and inspires innovation. Successful entrepreneurs often credit their achievements to constant learning from books written by experienced professionals. Some of the best business books provide insights into leadership, financial management, and personal growth, equipping readers with strategies to build and scale successful ventures.",
    date: "March 22, 2025",
    readMoreLink: "/mustread/",  // ✅ Correct link
  },
  {
    id: 2,
    title: "How to Grow Your Business with Strategic Thinking",
    excerpt: "Learn how strategic thinking can help you grow your business and stay ahead of the competition. Strategic thinking is crucial for business success, as it enables entrepreneurs to anticipate changes, identify opportunities, and minimize risks. Developing a solid business strategy involves market research, competitive analysis, and effective decision-making. By applying strategic thinking, companies can improve operational efficiency, drive innovation, and enhance customer satisfaction, leading to long-term growth and stability.",
    date: "March 18, 2025",
    readMoreLink: "/thinking/",  // ✅ Correct link
  },
  {
    id: 3,
    title: "The Impact of Financial Management in Business",
    excerpt: "A deep dive into how financial management can drive success in your business operations. Managing finances effectively ensures business stability, growth, and long-term sustainability. Proper financial management involves budgeting, cost control, investment strategies, and maintaining positive cash flow. Entrepreneurs who understand financial principles can make informed decisions, optimize resource allocation, and reduce unnecessary expenditures. Whether running a startup or an established business, financial literacy is a key driver of success.",
    date: "March 12, 2025",
    readMoreLink: "/manegement/",  // ✅ Correct link
  },
];

const getExcerptWithReadMore = (post) => {
  const words = post.excerpt.split(" ");
  const minWords = 100;

  if (words.length >= minWords) {
    return (
      <>
        <p className="mt-2 text-lg">{words.slice(0, minWords).join(" ")}...</p>
        <Link
          to={`${post.readMoreLink}${post.id}`}
          className="inline-block mt-3 text-blue-600 hover:underline"
        >
          Read more...
        </Link>
      </>
    );
  } else {
    return (
      <>
        <p className="mt-2 text-lg">{post.excerpt}</p>
        <Link
          to={`${post.readMoreLink}${post.id}`}
          className="inline-block mt-3 text-blue-600 hover:underline"
        >
          Read more...
        </Link>
      </>
    );
  }
};

const Blog = () => {
  return (
    <div className="blog-container max-w-screen-lg mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-3xl font-bold text-center mb-8">Business Book Blog</h1>

      <div className="blog-posts space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post border-b pb-4">
            <h2 className="text-2xl font-semibold">
              <Link
                to={`${post.readMoreLink}${post.id}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            {getExcerptWithReadMore(post)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
