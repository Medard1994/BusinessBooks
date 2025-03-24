import React from "react";
import { HiUsers, HiBookOpen, HiShoppingBag, HiCash, HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6 dark:bg-gray-900 dark:text-white ml-[200px]">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">📊 Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">Manage books, users, and track business performance.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[{ icon: HiUsers, label: "Total Users", value: "1,245", color: "blue" },
          { icon: HiBookOpen, label: "Total Books", value: "320", color: "green" },
          { icon: HiShoppingBag, label: "Total Orders", value: "812", color: "yellow" },
          { icon: HiCash, label: "Total Revenue", value: "$24,560", color: "red" }]
          .map(({ icon: Icon, label, value, color }, index) => (
            <div key={index} className={`p-4 bg-gradient-to-r from-${color}-100 to-${color}-300 shadow-md rounded-lg flex items-center space-x-4 transition-transform transform hover:scale-105`}>
              <Icon className={`text-${color}-500 text-4xl`} />
              <div>
                <h2 className="text-lg font-semibold">{label}</h2>
                <p className="text-gray-600 dark:text-gray-300">{value}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">📢 Recent Activity</h2>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>📚 New book added: <strong>"The Art of React"</strong></li>
            <li>👤 New user registered: <strong></strong></li>
            <li>🛒 Order placed by <strong></strong></li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">⚡ Quick Actions</h2>
          <div className="space-y-3">
            <Link to="/admin/upload" className="flex items-center space-x-2 text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition">
              <HiPlusCircle className="text-xl text-blue-500" /> <span>Upload New Book</span>
            </Link>
            <Link to="/admin/manage" className="flex items-center space-x-2 text-green-600 hover:bg-green-100 p-2 rounded-lg transition">
              <HiBookOpen className="text-xl text-green-500" /> <span>Manage Books</span>
            </Link>
            <Link to="/admin/users" className="flex items-center space-x-2 text-yellow-600 hover:bg-yellow-100 p-2 rounded-lg transition">
              <HiUsers className="text-xl text-yellow-500" /> <span>Manage Users</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
