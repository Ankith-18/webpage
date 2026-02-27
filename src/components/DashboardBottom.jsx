import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

function DashboardBottom() {

  const areaData = [
    { name: "Mon", product: 40, service: 24 },
    { name: "Tue", product: 30, service: 13 },
    { name: "Wed", product: 20, service: 35 },
    { name: "Thu", product: 27, service: 25 },
    { name: "Fri", product: 18, service: 40 },
    { name: "Sat", product: 23, service: 30 },
    { name: "Sun", product: 34, service: 28 }
  ];

  const radarData = [
    { subject: "Mon", A: 120, B: 110 },
    { subject: "Tue", A: 98, B: 130 },
    { subject: "Wed", A: 86, B: 130 },
    { subject: "Thu", A: 99, B: 100 },
    { subject: "Fri", A: 85, B: 90 },
    { subject: "Sat", A: 65, B: 85 },
    { subject: "Sun", A: 75, B: 95 }
  ];

  return (
    <div className="space-y-6">

      {/* ===== RECENT REPORT ROW ===== */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Left Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Report</h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorProduct" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorService" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="product"
                  stroke="#ec4899"
                  fill="url(#colorProduct)"
                />

                <Area
                  type="monotone"
                  dataKey="service"
                  stroke="#6366f1"
                  fill="url(#colorService)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Report</h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Products"
                  dataKey="A"
                  stroke="#ec4899"
                  fill="#ec4899"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Services"
                  dataKey="B"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.5}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* ===== TABLE ROW ===== */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Clients */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Clients Details</h3>

          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-3 text-left">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Project</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {[ 
                { id: 1, name: "John Doe", email: "xyz@mail.com", status: "Active", project: "ERP System" },
                { id: 2, name: "Sarah Smith", email: "xyz@mail.com", status: "Inactive", project: "ABC Website" },
                { id: 3, name: "Airi Satou", email: "xyz@mail.com", status: "Active", project: "Android App" }
              ].map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4">{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.project}</td>
                  <td>✏️ 🗑️</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">New Projects</h3>

          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b border-gray-200">
              <tr>
                <th className="py-3 text-left">Product</th>
                <th>Employees</th>
                <th>Cost</th>
              </tr>
            </thead>

            <tbody>
              {[
                { product: "iPhone X", cost: "$8000" },
                { product: "Pixel 2", cost: "$5500" },
                { product: "OnePlus", cost: "$9000" }
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4">{item.product}</td>
                  <td>👩‍💻 👨‍💻 👩‍💼</td>
                  <td>{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default DashboardBottom;