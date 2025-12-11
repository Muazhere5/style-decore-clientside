import { NavLink } from "react-router-dom";
import { FaUser, FaList, FaMoneyBill, FaCog, FaUsersCog } from "react-icons/fa";

const DashboardSidebar = ({ role }) => {
  return (
    <div className="w-64 min-h-screen bg-base-200 shadow-xl p-5 border-r border-base-300">
      <h1 className="text-xl font-bold mb-5 text-primary">Dashboard</h1>

      <ul className="menu">
        <li>
          <NavLink to="/dashboard/profile">
            <FaUser /> My Profile
          </NavLink>
        </li>

        {role === "user" && (
          <>
            <li>
              <NavLink to="/dashboard/bookings">
                <FaList /> My Bookings
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/payments">
                <FaMoneyBill /> Payment History
              </NavLink>
            </li>
          </>
        )}

        {role === "admin" && (
          <>
            <li>
              <NavLink to="/admin/services">
                <FaCog /> Manage Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/decorators">
                <FaUsersCog /> Manage Decorators
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/bookings">
                <FaList /> Manage Bookings
              </NavLink>
            </li>
          </>
        )}

        {role === "decorator" && (
          <>
            <li>
              <NavLink to="/decorator/projects">
                <FaList /> My Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/decorator/today">
                <FaCog /> Today’s Schedule
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
