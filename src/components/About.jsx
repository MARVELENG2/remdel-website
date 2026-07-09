import { FaBullseye, FaShieldAlt, FaUsers, FaMedal } from "react-icons/fa";
import aboutImage from "../assets/images/about-building.jpg";

const STATS = [
  { icon: FaBullseye, value: "100%", label: "Accuracy" },
  { icon: FaShieldAlt, value: "100+", label: "Projects Completed" },
  { icon: FaUsers, value: "50+", label: "Happy Clients" },
  { icon: FaMedal, value: "24/7", label: "Support" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src={aboutImage}
            alt="Modern residential building constructed by REMDEL"
            className="w-full h-[300px] md:h-[380px] object-cover rounded-xl"
          />
          <div className="absolute bottom-4 left-4 bg-navy-950 text-white rounded-lg px-5 py-3 flex items-center gap-3">
            <FaUsers size={22} className="text-green-600" />
            <div className="leading-tight">
              <p className="font-display font-bold text-lg">10+</p>
              <p className="text-xs text-white/80">Years Of Experience</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-red-600 font-semibold text-sm tracking-wide">ABOUT REMDEL</p>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-navy-950 mt-2 leading-snug">
            Building The Future
            <br />
            On Accuracy & Integrity
          </h2>
          <div className="w-14 h-1 bg-green-600 mt-3 mb-5 rounded-full" />
          <p className="text-ink-700">
            REMDEL Land Survey & Estate Agent Contractor provides professional
            surveying, engineering, construction, and property management
            services across Nigeria. We combine technical expertise, modern
            equipment, and industry best practices to deliver accurate and
            reliable results.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <Icon className="text-red-600" size={22} />
                <p className="font-display font-bold text-navy-950">{value}</p>
                <p className="text-xs text-ink-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}