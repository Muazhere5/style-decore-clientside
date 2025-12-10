// src/App.jsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Route → Page Title Mapping
const titles = {
  "/": "EventMaster | Home",
  "/services": "EventMaster | Services",
  "/booking": "EventMaster | Book Service",
  "/payment": "EventMaster | Payment",
  "/payment/success": "EventMaster | Payment Successful",
  "/login": "EventMaster | Login",
  "/register": "EventMaster | Register",
  "/about": "EventMaster | About Us",
  "/contact": "EventMaster | Contact",

  // Dashboard
  "/dashboard/profile": "Dashboard | Profile",
  "/dashboard/bookings": "Dashboard | My Bookings",
  "/dashboard/payments": "Dashboard | Payment History",

  // Admin
  "/admin/services": "Admin | Manage Services",
  "/admin/services/add": "Admin | Add Service",
  "/admin/decorators": "Admin | Manage Decorators",
  "/admin/bookings": "Admin | Manage Bookings",
  "/admin/revenue": "Admin | Revenue Analytics",
  "/admin/service-demand": "Admin | Service Demand Chart",

  // Decorator
  "/decorator/projects": "Decorator | My Projects",
  "/decorator/today": "Decorator | Today’s Schedule",
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Auto-detect dynamic routes
    let dynamicTitle = "EventMaster | Your Event, Our Service";

    if (path.startsWith("/service/")) dynamicTitle = "EventMaster | Service Details";
    if (path.startsWith("/dashboard/booking/update"))
      dynamicTitle = "Dashboard | Update Booking";
    if (path.startsWith("/admin/services/edit"))
      dynamicTitle = "Admin | Edit Service";
    if (path.startsWith("/decorator/status"))
      dynamicTitle = "Decorator | Update Status";

    const title = titles[path] || dynamicTitle;

    document.title = title;
  }, [location.pathname]);

  const hideHeaderFooter = location.pathname === "/404";

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {!hideHeaderFooter && <Header />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
