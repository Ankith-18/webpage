import { FaUser, FaCommentDots, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";

function ProfileDropdown() {
  return (
    <div className="absolute right-0 mt-3 w-56 bg-white shadow-2xl rounded-xl p-2 z-50">

      <ul className="space-y-1">

        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <FaUser className="text-gray-500" />
          <span>Profile</span>
        </li>

        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <FaCommentDots className="text-gray-500" />
          <span>Feedback</span>
        </li>

        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition">
          <FaQuestionCircle className="text-gray-500" />
          <span>Help</span>
        </li>

        <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-50 cursor-pointer transition text-red-500">
          <FaSignOutAlt />
          <span>Logout</span>
        </li>

      </ul>
    </div>
  );
}

export default ProfileDropdown;