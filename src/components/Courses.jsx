import React from "react";
import { motion } from "framer-motion";
import { FaPalette, FaHeart, FaSeedling, FaBookOpen, FaUsers } from "react-icons/fa";

const missionData = [
  {
    icon: <FaPalette />,
    title: "Bharat – Culture Integration",
    text:
      "Through colors and pictures, students are encouraged to express emotions and understand the deeper truths of life through drawing.",
  },
  {
    icon: <FaHeart />,
    title: "Value Awareness",
    text:
      "By observing children's imaginative artwork and guiding them, value-based thinking is nurtured during their formative years.",
  },
  {
    icon: <FaSeedling />,
    title: "Permanent Cultural Imprint",
    text:
      "Creative activities help personalities blossom and leave a lasting cultural impression rooted in universal values.",
  },
  {
    icon: <FaBookOpen />,
    title: "Akshara – Life Education",
    text:
      "Art-based learning develops creativity while imparting ethical, moral, and social understanding.",
  },
  {
    icon: <FaUsers />,
    title: "Cultural Transmission",
    text:
      "Students communicate and represent cultural values at district and state levels through various creative mediums.",
  },
];

const Courses = () => {
  return (
    <section className="w-full bg-[#f9fdfd] py-16">
      <div className="md:max-w-[1100px] max-w-[400px] m-auto px-4">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-[#208486] mb-12"
        >
          OUR MISSION
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl text-[#208486] mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
