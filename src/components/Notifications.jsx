import { FaCircle } from "react-icons/fa";

function Notifications() {
  const messages = [
    { name: "Sarah Smith", time: "5 min ago", text: "Please check your email", unread: true },
    { name: "Airi Satou", time: "20 min ago", text: "Project update available", unread: false },
    { name: "John Doe", time: "3 hours ago", text: "New order received", unread: true },
  ];

  return (
    <div className="absolute right-0 mt-3 w-80 bg-white shadow-2xl rounded-xl p-4 z-50 animate-fadeIn">

      <h3 className="font-semibold text-lg mb-4">Notifications</h3>

      <div className="space-y-3 max-h-72 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            <div>
              <p className="font-medium text-sm">{msg.name}</p>
              <p className="text-sm text-gray-600">{msg.text}</p>
              <p className="text-xs text-gray-400">{msg.time}</p>
            </div>

            {msg.unread && (
              <FaCircle className="text-blue-500 text-xs mt-2" />
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-blue-600 hover:underline">
        View All Notifications
      </button>
    </div>
  );
}

export default Notifications;