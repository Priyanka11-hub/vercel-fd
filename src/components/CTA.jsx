import React from "react";
import aboutImg from "../assets/cta.png";

const CTA = () => {
  return (
    <section className="w-full bg-[#F0FAF9] pt-12 pb-20 px-4">
      <div className="md:max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* IMAGE */}
        <div>
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full max-w-[520px] rounded-3xl shadow-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-4">
          <p className="uppercase tracking-widest text-sm text-[#155E63] font-semibold">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#155E63] leading-snug">
            Building Values Through Art & Cultural Learning
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to shaping young minds by blending creativity,
            culture, and education. Through art-based learning, we help students
            express emotions, understand values, and build strong moral
            foundations.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our approach strengthens the connection between parents, educators,
            and students—nurturing emotionally aware, confident, and responsible
            individuals.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#155E63]">
                Value-Based Learning
              </h4>
              <p className="text-sm text-gray-600">
                Moral growth through creativity
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              <h4 className="font-semibold text-[#155E63]">
                Cultural Awareness
              </h4>
              <p className="text-sm text-gray-600">
                Rooted in tradition & art
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
