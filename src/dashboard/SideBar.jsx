import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import imgUser from "../assets/profile.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-screen flex -mt-[100px]">
      {/* Sidebar */}
      <div className="h-screen w-48 bg-gray-100 text-gray-800 shadow-md fixed">
        <Sidebar aria-label="Sidebar with navigation">
          {/* Profile Section */}
          <div className="flex items-center pl-4 py-3 space-x-2">
            <img
              src={user?.photoURL || imgUser}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-sm font-semibold">
              {user?.displayName || "Demo User"}
            </h2>
          </div>

          <Sidebar.Items className="space-y-1">
            {/* Main Navigation */}
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                Upload Book
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                Manage Books
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/logout" icon={HiArrowSmRight}>
                Log Out
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/signup" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            {/* Additional Navigation */}
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiBuoy}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideBar;
