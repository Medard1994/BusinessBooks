import React from "react";

const Mustread = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-4xl font-bold text-center mb-6">
        The Top 5 Business Books You Must Read
      </h1>
      <p className="text-lg text-gray-700 text-center">
        Discover the top 5 books that every entrepreneur should read to succeed in business.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">1. The Lean Startup – Eric Ries</h2>
          <p className="text-gray-600">
            This book introduces the **Lean Startup methodology**, which focuses on rapid experimentation,
            validated learning, and continuous innovation. A must-read for entrepreneurs who want to
            **reduce risks and maximize growth**.
          </p>
          <a
            href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Buy on Amazon
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">2. Good to Great – Jim Collins</h2>
          <p className="text-gray-600">
            Jim Collins explores why some companies **become great while others fail**.
            The book identifies key principles, such as Level 5 Leadership and the Hedgehog Concept,
            to guide businesses toward long-term success.
          </p>
          <a
            href="https://www.amazon.com/Good-Great-Some-Companies-Others/dp/0066620996"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Buy on Amazon
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">3. The 7 Habits of Highly Effective People – Stephen Covey</h2>
          <p className="text-gray-600">
            A personal and professional development classic, this book teaches seven core habits
            that help individuals and business leaders **achieve extraordinary success**.
          </p>
          <a
            href="https://www.amazon.com/7-Habits-Highly-Effective-People/dp/1982137274"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Buy on Amazon
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">4. Think and Grow Rich – Napoleon Hill</h2>
          <p className="text-gray-600">
            One of the most influential business books of all time, **Think and Grow Rich**
            teaches the power of mindset, goal-setting, and persistence in achieving financial success.
          </p>
          <a
            href="https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/193787950X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Buy on Amazon
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">5. Zero to One – Peter Thiel</h2>
          <p className="text-gray-600">
            This book focuses on how to **create truly innovative businesses** rather than
            copying existing models. Peter Thiel, co-founder of PayPal, shares unique insights
            into startups and building a monopoly.
          </p>
          <a
            href="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mustread;
