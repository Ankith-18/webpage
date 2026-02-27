import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  FaBell,
  FaCog,
  FaExpand,
} from "react-icons/fa";
import Notifications from "./Notifications";
import ProfileDropdown from "./ProfileDropdown";

function Navbar({ collapsed, setCollapsed }) {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifRef = useRef();
  const profileRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotif(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm">

      {/* Left Side */}
      <div className="flex items-center space-x-4">

  {/* Hamburger */}
    <FaBars
        className="text-lg cursor-pointer text-gray-600 hover:text-blue-600 transition"
        onClick={() => setCollapsed(!collapsed)}
    />

    <h2 className="text-2xl font-semibold text-gray-700">
        Dashboard
    </h2>

    </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-6">

        {/* Fullscreen */}
        <FaExpand className="text-lg cursor-pointer text-gray-600 hover:text-blue-600 transition" />

        {/* Notification */}
        <div className="relative" ref={notifRef}>
        <div
            className="relative cursor-pointer"
            onClick={() => {
            setShowNotif(!showNotif);
            setShowProfile(false);
            }}
        >
            <FaBell className="text-lg text-gray-600 hover:text-blue-600 transition" />
            
            {/* Red Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
            </span>
        </div>

        {showNotif && <Notifications />}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-9 h-9 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotif(false);
            }}
          />
          {showProfile && <ProfileDropdown />}
        </div>

        {/* Settings */}
        <FaCog className="text-lg cursor-pointer text-gray-600 hover:text-blue-600 transition" />

      </div>
    </div>
  );
}

export default Navbar;