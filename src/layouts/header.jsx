import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useI18n } from "../lib/I18nProvider";
import useMain from "../hooks/useMain";
import { getMediaUrl } from "../lib/media";

export default function Header() {
  const { data } = useMain();
  const { t, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const enterprise_name = data?.enterprise_name;
  const icon = data?.icon;

  const logoUrl = getMediaUrl(icon);

  const linkClass = ({ isActive }) =>
    `relative transition-all duration-200 px-1 py-2
     ${
       isActive
         ? "text-blue-500 font-semibold"
         : "text-gray-600 hover:text-blue-500"
     }`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={enterprise_name || "logo"}
                className="h-10 w-auto object-contain"
              />
            )}
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              {t.header.home}
            </NavLink>

            <NavLink to="/aboutus" className={linkClass}>
              {t.header.about}
            </NavLink>

            <NavLink to="/blog" className={linkClass}>
              blog
            </NavLink>

            <NavLink to="/employment" className={linkClass}>
              employment
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              contact
            </NavLink>
          </nav>

          {/* LANG */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setLocale("es")}>ES</button>
            <button onClick={() => setLocale("en")}>EN</button>
            <button onClick={() => setLocale("pt")}>PT</button>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">

            <NavLink to="/" className={linkClass}>
              {t.header.home}
            </NavLink>

            <NavLink to="/aboutus" className={linkClass}>
              {t.header.about}
            </NavLink>

            <NavLink to="/blog" className={linkClass}>
              blog
            </NavLink>

            <NavLink to="/employment" className={linkClass}>
              employment
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              contact
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