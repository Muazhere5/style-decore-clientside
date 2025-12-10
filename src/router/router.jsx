import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Public Pages
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import BookingPage from "../pages/BookingPage";
import PaymentPage from "../pages/PaymentPage";
import PaymentSuccess from "../pages/PaymentSuccess";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SocialLogin from "../pages/SocialLogin";
import ErrorPage from "../pages/ErrorPage";

// User Dashboard
import DashboardLayout from "../pages/DashboardLayout";
import UserProfile from "../pages/UserProfile";
import MyBookings from "../pages/MyBookings";
import UpdateBooking from "../pages/UpdateBooking";
import PaymentHistory from "../pages/PaymentHistory";

// Admin
import ManageServices from "../pages/ManageServices";
import AddService from "../pages/AddService";
import EditService from "../pages/EditService";
import ManageDecorators from "../pages/ManageDecorators";
import ManageBookings from "../pages/ManageBookings";
import RevenueAnalytics from "../pages/RevenueAnalytics";
import ServiceDemandChart from "../pages/ServiceDemandChart";

// Decorator
import MyProjects from "../pages/MyProjects";
import TodaySchedule from "../pages/TodaySchedule";
import UpdateStatus from "../pages/UpdateStatus";

// Route Guards
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";
import DecoratorRoute from "../components/DecoratorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // Public Routes
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/service/:id", element: <ServiceDetails /> },
      { path: "/booking", element: <ProtectedRoute><BookingPage /></ProtectedRoute> },
      { path: "/payment", element: <ProtectedRoute><PaymentPage /></ProtectedRoute> },
      { path: "/payment/success", element: <PaymentSuccess /> },

      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/social", element: <SocialLogin /> },

      // User Dashboard
      {
        path: "/dashboard",
        element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        children: [
          { path: "profile", element: <UserProfile /> },
          { path: "bookings", element: <MyBookings /> },
          { path: "booking/update/:id", element: <UpdateBooking /> },
          { path: "payments", element: <PaymentHistory /> },
        ],
      },

      // Admin Routes
      {
        path: "/admin",
        element: <AdminRoute><DashboardLayout /></AdminRoute>,
        children: [
          { path: "services", element: <ManageServices /> },
          { path: "services/add", element: <AddService /> },
          { path: "services/edit/:id", element: <EditService /> },

          { path: "decorators", element: <ManageDecorators /> },
          { path: "bookings", element: <ManageBookings /> },

          { path: "revenue", element: <RevenueAnalytics /> },
          { path: "service-demand", element: <ServiceDemandChart /> },
        ],
      },

      // Decorator Routes
      {
        path: "/decorator",
        element: <DecoratorRoute><DashboardLayout /></DecoratorRoute>,
        children: [
          { path: "projects", element: <MyProjects /> },
          { path: "today", element: <TodaySchedule /> },
          { path: "status/:id", element: <UpdateStatus /> },
        ],
      },
    ],
  },
]);

export default router;
