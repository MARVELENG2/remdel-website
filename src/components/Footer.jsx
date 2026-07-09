import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsappSquare } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const QUICK_LINKS = ["Home", "About Us", "Services", "Projects", "Gallery", "Contact Us"];
const SERVICES = [
  "Land Survey",
  "Estate Surveyor",
  "Layout Design & Setting Out",
  "Road Construction",
  "Building Construction",
  "Boreholes Drilling & Servicing",
  "Structural Design",
  "Electrical & Mechanical Plan",
  "Property Management",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-950 text-white pt-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="REMDEL logo" className="w-12 h-12 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-lg">REMDEL</div>
              <div className="text-[9px] text-white/60 tracking-widest">
                LAND SURVEY & ESTATE AGENT
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Precision in Survey,
            <br />
            Excellence in Construction,
            <br />
            Value that Lasts.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsappSquare].map((Icon, i) => (
              <a
                key={i}
                href="https://wa.me/2348034988361?text=Hello%20REMDEL%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20a%20project.%20From%20your%20website."
                aria-label="social link"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm text-red-500 tracking-wide mb-4">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-sm text-red-500 tracking-wide mb-4">
            OUR SERVICES
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {SERVICES.map((service) => (
              <li key={service}>
                <a href="#services" className="hover:text-white transition-colors">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display font-semibold text-sm text-red-500 tracking-wide mb-4">
            CONTACT INFO
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" size={12} />
              08034988361
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" size={12} />
              aderemiolofintoye@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-600 mt-0.5" size={12} />
              Number 3, Unity Zone10, Oloungogo, Ado Ekiti.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© 2026 REMDEL Land Survey & Estate Agent Contractor. All Rights Reserved.</p>
          <p> quality and reliability.</p>
        </div>
      </div>
    </footer>
  );
}