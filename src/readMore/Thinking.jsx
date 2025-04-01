import React from "react";

const Thinking = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-4xl font-bold text-center mb-6">
        How to Grow Your Business with Strategic Thinking
      </h1>
      <p className="text-lg text-gray-700 text-center">
        Learn how strategic thinking can help you grow your business and stay ahead of the competition.
      </p>

      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold">What is Strategic Thinking?</h2>
        <p className="text-gray-600">
          Strategic thinking is the ability to plan for the future with a clear vision, considering both challenges
          and opportunities. It helps business leaders <strong>make informed decisions</strong>, adapt to changes, and create
          long-term success.
        </p>

        <h2 className="text-2xl font-semibold">Key Strategies to Grow Your Business</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Set Clear Goals:</strong> Define long-term objectives and break them into actionable steps.</li>
          <li><strong>Analyze Market Trends:</strong> Stay updated on industry shifts and customer needs.</li>
          <li><strong>Innovate Constantly:</strong> Encourage creative problem-solving and adaptability.</li>
          <li><strong>Leverage Technology:</strong> Use tools like AI, automation, and data analytics to stay competitive.</li>
          <li><strong>Develop Leadership Skills:</strong> Great leaders inspire teams and drive success.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Recommended Books on Strategic Thinking</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <a
              href="https://www.amazon.com/Blue-Ocean-Strategy-Uncontested-Competition/dp/1625274491"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Blue Ocean Strategy – W. Chan Kim & Renée Mauborgne
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Your-Next-Five-Moves-Master/dp/1982154802"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Your Next Five Moves – Patrick Bet-David
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Art-Strategy-Theorists-Success-Business/dp/0393337170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Art of Strategy – Avinash K. Dixit & Barry J. Nalebuff
            </a>
          </li>
        </ul>

        {/* Responsive Book Images */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <img 
            src="https://m.media-amazon.com/images/I/91YCWH4jFdL._SL1500_.jpg" 
            alt="Blue Ocean Strategy" 
            className="w-[250px] h-auto rounded-lg shadow-md"
          />
          <img 
            src="https://m.media-amazon.com/images/I/71ah+6D5ahL._SL1500_.jpg" 
            alt="Your Next Five Moves" 
            className="w-[250px] h-auto rounded-lg shadow-md"
          />
          <img 
            src="https://m.media-amazon.com/images/I/61+7prVoocL._SL1198_.jpg" 
            alt="The Art of Strategy" 
            className="w-[250px] h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 mt-6">
          By developing a strategic mindset, you can take your business to <strong>new heights</strong> and achieve <strong>long-term success</strong>.
          Stay proactive, embrace change, and keep learning!
        </p>
      </div>
    </div>
  );
};

export default Thinking;
