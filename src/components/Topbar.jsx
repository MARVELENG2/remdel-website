import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="bg-navy-950 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs md:text-sm">
          <a href="tel:08034988361" className="flex items-center gap-2 hover:text-green-600 transition-colors">
            <FaPhoneAlt className="text-green-600" size={12} />
            08034988361
          </a>
          <a href="mailto:aderemiolofintoye@gmail.com" className="flex items-center gap-2 hover:text-green-600 transition-colors">
            <FaEnvelope className="text-green-600" size={12} />
            aderemiolofintoye@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-600" size={12} />
            Number 3, Unity Zone10, Oloungogo, Ado Ekiti.
          </span>
        </div>
        <div className="flex items-center gap-2">
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social link"
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Icon size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}