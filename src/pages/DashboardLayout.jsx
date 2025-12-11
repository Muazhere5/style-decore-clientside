import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex gap-6">
      <DashboardSidebar />

      <div className="flex-grow bg-base-100 p-6 rounded-xl shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
