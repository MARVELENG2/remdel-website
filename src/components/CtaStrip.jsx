import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function CtaStrip() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl shadow-lg border border-black/5 p-6 md:p-8 flex flex-wrap items-center justify-between gap-6 relative">
          <div>
            <p className="text-red-600 font-semibold text-sm tracking-wide">LET'S WORK TOGETHER</p>
            <h3 className="font-display font-bold text-xl md:text-2xl text-navy-950 mt-1">
              Ready To Start
              <br />
              Your Project?
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="tel:08034988361" className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-green-600/10 flex items-center justify-center">
                <FaPhoneAlt className="text-green-600" size={16} />
              </span>
              <span className="text-sm text-navy-950">
                08034988361
                <br />
                <span className="text-xs text-ink-500">Call / Whatsapp</span>
              </span>
            </a>

            <a href="mailto:aderemiolofintoye@gmail.com" className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-navy-950/10 flex items-center justify-center">
                <FaEnvelope className="text-navy-950" size={16} />
              </span>
              <span className="text-sm text-navy-950">
                aderemiolofintoye
                <br />
                <span className="text-xs text-ink-500">@gmail.com</span>
              </span>
            </a>

            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-navy-950/10 flex items-center justify-center">
                <FaMapMarkerAlt className="text-navy-950" size={16} />
              </span>
              <span className="text-sm text-navy-950">
                Number 3, Unity Zone10,
                <br />
                <span className="text-xs text-ink-500">Olounsogo, Ado Ekiti.</span>
              </span>
            </div>
          </div>

         <a
  href="https://wa.me/2348034988361?text=Hello%20REMDEL%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20a%20project.%20From%20your%20website."
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center text-white transition-colors"
  aria-label="Chat on WhatsApp"
>
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}