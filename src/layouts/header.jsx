import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useI18n } from "../lib/I18nProvider";
import useMain from "../hooks/useMain";

const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

export default function Header() {
  const { enterprise_name, icon } = useMain();
  const { t, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative transition-all duration-200 px-1 py-2
     ${isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-600 hover:text-blue-500"
    }`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo/Image */}
          <div className="flex items-center gap-3">
            {icon && (
              <img
                src={`${ASSETS_URL}${icon}`}
                alt={enterprise_name || "logo"}
                className="h-10 w-auto object-contain"
              />
            )}

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              {t.header.home}
            </NavLink>

            <NavLink to="/aboutus" className={linkClass}>
              {t.header.about}
            </NavLink>

            <NavLink to="/aboutus" className={linkClass}>
              {t.header.about}
            </NavLink>

            <NavLink to="/aboutus" className={linkClass}>
              {t.header.about}
            </NavLink>

            <NavLink to="/aboutus" className={linkClass}>
              {t.header.about}
            </NavLink>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLocale("es")}
              className="text-sm text-gray-600 hover:text-blue-500 transition"
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className="text-sm text-gray-600 hover:text-blue-500 transition"
            >
              EN
            </button>
            <button
              onClick={() => setLocale("pt")}
              className="text-sm text-gray-600 hover:text-blue-500 transition"
            >
              PT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink to="/" className={linkClass}>
              {t.header.home}
            </NavLink>

            <NavLink to="/aboutus" className={linkClass}>
              {t.header.about}
            </NavLink>

            <div className="flex gap-4 pt-2 border-t border-gray-100">
              <button onClick={() => setLocale("es")}>ES</button>
              <button onClick={() => setLocale("en")}>EN</button>
              <button onClick={() => setLocale("pt")}>PT</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}