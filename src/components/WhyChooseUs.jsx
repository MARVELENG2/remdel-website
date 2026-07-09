import { FaBullseye, FaShieldAlt, FaUserTie, FaThumbsUp } from "react-icons/fa";
import whyChooseImage from "../assets/images/why-choose-us.jpg";

const COMMITMENTS = [
  {
    icon: FaBullseye,
    title: "ACCURACY",
    description: "We use modern equipment and proven methods to ensure precise results.",
  },
  {
    icon: FaShieldAlt,
    title: "INTEGRITY",
    description: "We uphold honesty, transparency, and professional ethics.",
  },
  {
    icon: FaUserTie,
    title: "PROFESSIONALISM",
    description: "Our team of experts is committed to delivering quality on every project.",
  },
  {
    icon: FaThumbsUp,
    title: "CLIENT SATISFACTION",
    description: "We prioritize our clients' needs and deliver beyond expectations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-950 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text + Cards */}
        <div>
          <p className="text-green-600 font-semibold text-sm tracking-wide">WHY CHOOSE REMDEL</p>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-white mt-2">
            Our Commitment To Excellence
          </h2>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {COMMITMENTS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-2">
                <Icon className="text-white" size={26} />
                <h3 className="font-display font-bold text-sm text-white tracking-wide">
                  {title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden border-2 border-green-600">
          <img
            src={whyChooseImage}
            alt="Surveyor working on-site with equipment"
            className="w-full h-[300px] md:h-[380px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}