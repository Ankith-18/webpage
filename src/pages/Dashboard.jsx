import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import DashboardBottom from "../components/DashboardBottom";
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-r from-teal-400 to-teal-300">

      <Sidebar collapsed={collapsed} />

      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
        <DashboardCards />
        <div className="mt-6">
            <DashboardBottom />
            </div>
        </div>

    </div>
  );
}

export default Dashboard;