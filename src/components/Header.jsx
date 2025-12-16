import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";

const Header = () => {
  const { user, logoutUser } = useAuth();
  const [open, setOpen] = useState(false);

  // ✅ DaisyUI theme names
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "styledecorlight"
  );

  // ✅ Apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "styledecorlight" ? "styledecorsdark" : "styledecorlight"
    );
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
        {/* LEFT */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold">
            EventMaster
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center">{navItems}</div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {theme === "styledecorlight" ? <Moon /> : <Sun />}
          </button>

          {/* Auth */}
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

          {/* Mobile */}
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
