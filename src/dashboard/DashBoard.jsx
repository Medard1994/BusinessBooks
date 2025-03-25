import React from "react";
import { HiUsers, HiBookOpen, HiShoppingBag, HiCash } from "react-icons/hi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 min-h-screen ml-[200px] ">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">📊 Admin Dashboard</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">Effortlessly manage books, users, and orders.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[{ icon: HiUsers, label: "Total Users", value: "1,245", color: "bg-blue-500" },
          { icon: HiBookOpen, label: "Total Books", value: "320", color: "bg-green-500" },
          { icon: HiShoppingBag, label: "Total Orders", value: "812", color: "bg-yellow-500" },
          { icon: HiCash, label: "Total Revenue", value: "$24,560", color: "bg-red-500" }]
          .map(({ icon: Icon, label, value, color }, index) => (
            <div key={index} className="p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/70 dark:bg-gray-900/80 hover:shadow-xl transition-all transform hover:scale-105 flex items-center space-x-4">
              <div className={`p-4 rounded-full ${color} text-white shadow-md`}>
                <Icon className="text-3xl sm:text-4xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{label}</h2>
                <p className="text-gray-600 dark:text-gray-300">{value}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {/* Recent Activity */}
        <div className="p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/70 dark:bg-gray-900/80">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3">📢 Recent Activity</h2>
          <ul className="text-gray-600 dark:text-gray-300 space-y-3">
            <li className="flex items-center gap-2"><HiBookOpen className="text-blue-500 text-xl" /> New book added: <strong>"The Art of React"</strong></li>
            <li className="flex items-center gap-2"><HiUsers className="text-green-500 text-xl" /> New user registered: <strong>John Doe</strong></li>
            <li className="flex items-center gap-2"><HiShoppingBag className="text-yellow-500 text-xl" /> Order placed by <strong>Sarah Lee</strong></li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="p-6 rounded-xl shadow-lg backdrop-blur-md bg-white/70 dark:bg-gray-900/80">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3">⚡ Quick Actions</h2>
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600 transition">
              <HiBookOpen className="text-xl" /> <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
