import React from "react";
import { FaChalkboardTeacher, FaSchool, FaHandsHelping } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Categories = () => {
  const benefits = [
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: "Experienced Teachers",
      desc: "Guided by 178+ trained educators focused on value-based learning.",
    },
    {
      icon: <PiStudentFill size={30} />,
      title: "Mass Student Reach",
      desc: "Successfully impacted over 4,76,368 students nationwide.",
    },
    {
      icon: <FaSchool size={30} />,
      title: "School Partnerships",
      desc: "Collaborating with 388+ schools across urban and rural areas.",
    },
    {
      icon: <FaHandsHelping size={30} />,
      title: "NGO Collaboration",
      desc: "Actively working with 56+ NGOs to promote cultural education.",
    },
  ];

  return (
    <section className="w-full bg-[#F0F8F7] py-20">
      <div className="md:max-w-[1100px] max-w-[90%] mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#155E63]">
            Our Key Benefits
          </h2>
          <p className="text-lg text-[#475569] mt-3">
            Creating long-term impact through art, education, and values
          </p>
        </motion.div>

        {/* BENEFIT CARDS */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#E6F4F3] text-[#155E63] rounded-xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#155E63] mb-2">
                {item.title}
              </h3>

              <p className="text-[#64748b]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
