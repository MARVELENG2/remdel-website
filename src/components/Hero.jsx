import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/images/hero-surveyor.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center py-10 md:py-16">
        <div>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-navy-950">
            PRECISION SURVEYING.
            <br />
            QUALITY CONSTRUCTION.
            <br />
            <span className="text-green-600">TRUSTED RESULTS.</span>
          </h1>
          <p className="mt-5 text-ink-700 max-w-md">
            We deliver accurate survey, innovative design and quality
            construction solutions that stand the test of time.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="tel:08034988361"
              className="flex items-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-semibold text-sm px-6 py-3.5 rounded-md transition-colors"
            >
              <FaPhoneAlt size={14} />
              CALL NOW
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3.5 rounded-md transition-colors"
            >
              GET A QUOTE
              <FaArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Surveyor using a total station on site"
            className="w-full h-[280px] md:h-[380px] object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 pb-4">
        <span className="w-6 h-1.5 rounded-full bg-navy-950" />
        <span className="w-6 h-1.5 rounded-full bg-navy-950/20" />
        <span className="w-6 h-1.5 rounded-full bg-navy-950/20" />
      </div>

      <div className="h-3 w-full bg-gradient-to-r from-navy-950 via-red-600 to-green-600" />
    </section>
  );
}