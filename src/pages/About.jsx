import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/cta.png";

const About = () => {
  return (
    <motion.section
      className="bg-[#F0FAF9] py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#7ED6DF] rounded-3xl -z-10"></div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="uppercase tracking-widest text-sm text-[#155E63] mb-3 font-semibold">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#155E63] mb-6 leading-snug">
            Building Values Through Art & Cultural Learning
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            We are committed to shaping young minds by blending creativity,
            culture, and education. Through art-based learning, we help students
            express emotions, understand values, and build strong moral
            foundations.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our approach strengthens the connection between parents, educators,
            and students, nurturing emotionally aware, confident, and
            responsible individuals for the future.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-white p-4 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="font-semibold text-[#155E63] mb-1">
                Value-Based Learning
              </h4>
              <p className="text-sm text-gray-600">
                Moral growth through creativity
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h4 className="font-semibold text-[#155E63] mb-1">
                Cultural Awareness
              </h4>
              <p className="text-sm text-gray-600">
                Rooted in tradition & art
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;
