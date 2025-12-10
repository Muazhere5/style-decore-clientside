import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  const navItems = (
    <>
      <NavLink to="/" className="mx-2 font-medium">Home</NavLink>
      <NavLink to="/services" className="mx-2 font-medium">Services</NavLink>
      <NavLink to="/about" className="mx-2 font-medium">About</NavLink>
      <NavLink to="/contact" className="mx-2 font-medium">Contact</NavLink>
    </>
  );

  return (
    <header className="shadow-md bg-base-100 sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT - LOGO */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold">
            {/* 🔔 Place your logo inside src/assets and import it if needed */}
            EventMaster
          </Link>
        </div>

        {/* NAV LINKS (Desktop) */}
        <div className="hidden lg:flex items-center">{navItems}</div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          {/* User Login Area */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost">
                {user.displayName || "Account"}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><Link to="/dashboard/profile">Dashboard</Link></li>
                <li><button onClick={logoutUser}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
          )}

          {/* Mobile Menu */}
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="lg:hidden bg-base-100 shadow-md p-4 space-y-2">
          {navItems}
        </div>
      )}
    </header>
  );
};

export default Header;