import {
  FaHome,
  FaChartBar,
  FaEnvelope,
  FaShoppingCart,
  FaThLarge,
  FaCalendar,
  FaChevronDown
} from "react-icons/fa";
import { useState } from "react";

function Sidebar({ collapsed }) {
  const [openDashboard, setOpenDashboard] = useState(true);

  return (
    <div
      className={`bg-white shadow-lg h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-6">

        {/* LOGO */}
        {!collapsed && (
          <h1 className="text-2xl font-bold text-blue-600 mb-8">
            SURYA <span className="text-gray-700">INFO</span>
          </h1>
        )}

        {/* PROFILE */}
        {!collapsed && (
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="font-semibold">Emily Smith</p>
            <p className="text-sm text-gray-500">Manager</p>
          </div>
        )}

        {/* MENU */}
        <ul className="space-y-3">

          {/* HOME */}
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaHome />
            {!collapsed && <span>Home</span>}
          </li>

          {/* DASHBOARD */}
          <li>
            <div
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => !collapsed && setOpenDashboard(!openDashboard)}
            >
              <div className="flex items-center gap-4">
                <FaChartBar />
                {!collapsed && <span>Dashboard</span>}
              </div>
              {!collapsed && <FaChevronDown className={`transition ${openDashboard ? "rotate-180" : ""}`} />}
            </div>

            {/* SUB MENU */}
            {!collapsed && openDashboard && (
              <ul className="ml-10 mt-2 space-y-2 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer">Dashboard 1</li>
                <li className="hover:text-blue-600 cursor-pointer">Dashboard 2</li>
                <li className="hover:text-blue-600 cursor-pointer">Dashboard 3</li>
              </ul>
            )}
          </li>

          {/* EVENTS */}
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaCalendar />
            {!collapsed && <span>Events</span>}
          </li>

          {/* EMAIL */}
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaEnvelope />
            {!collapsed && <span>Email</span>}
          </li>

          {/* APPS */}
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaThLarge />
            {!collapsed && <span>Apps</span>}
          </li>

          {/* E-COMMERCE */}
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaShoppingCart />
            {!collapsed && <span>E-commerce</span>}
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Sidebar;