function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
        <p className="text-sm text-gray-500 mb-2">Total Income</p>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold text-gray-800">$758</h3>
          <span className="text-green-500 text-sm font-medium bg-green-50 px-2 py-1 rounded-lg">
            +2.5%
          </span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
        <p className="text-sm text-gray-500 mb-2">Orders Received</p>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold text-gray-800">1025</h3>
          <span className="text-red-500 text-sm font-medium bg-red-50 px-2 py-1 rounded-lg">
            -1.8%
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
        <p className="text-sm text-gray-500 mb-2">Total Sales</p>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold text-gray-800">956</h3>
          <span className="text-green-500 text-sm font-medium bg-green-50 px-2 py-1 rounded-lg">
            +3.1%
          </span>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
        <p className="text-sm text-gray-500 mb-2">Active Users</p>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-bold text-gray-800">214</h3>
          <span className="text-green-500 text-sm font-medium bg-green-50 px-2 py-1 rounded-lg">
            +5.4%
          </span>
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;