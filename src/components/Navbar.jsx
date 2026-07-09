import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      "Land Survey",
      "Estate Surveyor",
      "Layout Design & Setting Out",
      "Road Construction",
      "Building Construction",
      "Boreholes Drilling and Servicing",
      "Structural Design",
      "Electrical and Mechanical Plan",
      "Property Management",
    ],
  },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
         <img src={logo} alt="REMDEL logo" className="w-12 h-12 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-navy-950 text-xl tracking-wide">
              REMDEL
            </div>
            <div className="text-[10px] text-red-600 font-semibold tracking-wide">
              LAND SURVEY & ESTATE AGENT
            </div>
            <div className="text-[9px] text-ink-500 tracking-widest">
              CONTRACTOR
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-medium text-navy-950">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setServicesOpen(true)}
              onMouseLeave={() => link.dropdown && setServicesOpen(false)}
            >
              <a href={link.href} className="flex items-center gap-1 hover:text-red-600 transition-colors">
                {link.label}
                {link.dropdown && <FaChevronDown size={10} />}
              </a>
              {link.dropdown && servicesOpen && (
                <ul className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-black/5 py-2 z-50">
                  {link.dropdown.map((item) => (
                    <li key={item}>
                      <a
                        href="#services"
                        className="block px-4 py-2 text-sm text-navy-950 hover:bg-navy-950/5 hover:text-red-600 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-block bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
        >
          GET A QUOTE
        </a>

        <button
          className="lg:hidden text-navy-950 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/5 px-4 py-4">
          <ul className="flex flex-col gap-1 font-medium text-navy-950">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 hover:text-red-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <ul className="pl-4 border-l-2 border-navy-900/10 mb-2">
                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <a
                          href="#services"
                          className="block py-1.5 text-sm text-ink-700 hover:text-red-600 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block text-center mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            GET A QUOTE
          </a>
        </div>
      )}
    </header>
  );
}