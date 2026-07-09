import {
  FaDraftingCompass,
  FaHome,
  FaRulerCombined,
  FaRoad,
  FaBuilding,
  FaHardHat,
  FaLayerGroup,
  FaBolt,
  FaHandHoldingHeart,
} from "react-icons/fa";

const SERVICES = [
  { icon: FaDraftingCompass, label: "Land Survey" },
  { icon: FaHome, label: "Estate Surveyor" },
  { icon: FaRulerCombined, label: "Layout Design & Setting Out" },
  { icon: FaRoad, label: "Road Construction" },
  { icon: FaBuilding, label: "Building Construction" },
  { icon: FaHardHat, label: "Boreholes Drilling and Servicing" },
  { icon: FaLayerGroup, label: "Structural Design" },
  { icon: FaBolt, label: "Electrical and Mechanical Plan" },
  { icon: FaHandHoldingHeart, label: "Property Management" },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p className="text-red-600 font-semibold text-sm tracking-wide">OUR SERVICES</p>
        <h2 className="font-display font-bold text-2xl md:text-4xl text-navy-950 mt-2">
          What We Do
        </h2>
        <div className="w-14 h-1 bg-green-600 mx-auto mt-3 mb-10 rounded-full" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {SERVICES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center justify-center gap-4 min-h-[150px]"
            >
              <Icon className="text-navy-900" size={32} />
              <p className="text-sm font-semibold text-navy-950 leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}