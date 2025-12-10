// src/components/Footer.jsx
// Place any images (e.g., logo) inside src/assets and import them here
// Example: import logo from "../assets/your-logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1 — Logo + Branding */}
        <div>
          {/* Add your logo in src/assets and import above */}
          {/* <img src={logo} alt="Logo" className="h-12 mb-3" /> */}
          <h2 className="text-xl font-bold text-white tracking-wide">
            EventMaster
          </h2>
          <p className="text-sm mt-2 leading-relaxed">
            Your trusted partner for planning, booking, and managing memorable
            events.
          </p>
        </div>

        {/* Section 2 — Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3 — Account */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-white transition">
                Register
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="hover:text-white transition">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4 — Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm leading-relaxed">
            Email: support@eventmaster.com
          </p>
          <p className="text-sm mt-1">Phone: +880 1234 567 890</p>
          <p className="text-sm mt-1">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EventMaster. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;