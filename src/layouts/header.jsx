import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-blue-300"
    }`;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold tracking-wide">
          TouchReact
        </h1>

        {/* Links */}
        <div className="flex gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/aboutus" className={linkClass}>
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}