import React from "react";
import { motion } from "framer-motion";
import { FaPalette, FaUsers, FaLeaf } from "react-icons/fa";
import VisionImg from "../assets/vision-illustration.png";

const Companies = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F0FAF9] py-24">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold text-[#155E63]"
        >
          OUR VISION
        </motion.h2>

        {/* DIVIDER */}
        <div className="flex justify-center mt-4 mb-16">
          <span className="h-1 w-24 bg-[#155E63]/70 rounded-full"></span>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT – BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src={VisionImg}
              alt=""
              className="w-full max-w-[650px]"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* RIGHT – TEXT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-lg"
          >
            <p className="text-xl md:text-2xl text-[#334155] leading-relaxed">
              To establish{" "}
              <span className="font-semibold text-[#155E63]">
                Aksharmala
              </span>{" "}
              as a model initiative in Maharashtra that achieves{" "}
              <span className="font-semibold">
                completeness of values
              </span>{" "}
              through family participation, embedding moral and cultural values
              in every student’s life to nurture responsible and conscious
              citizens.
            </p>
          </motion.div>

        </div>

        {/* VALUE HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {[
            {
              icon: <FaPalette />,
              title: "Art-Based Learning",
              text: "Promoting creativity, emotional expression, and inner growth."
            },
            {
              icon: <FaUsers />,
              title: "Family Participation",
              text: "Building strong values through collective involvement."
            },
            {
              icon: <FaLeaf />,
              title: "Cultural Foundation",
              text: "Preserving moral, cultural, and traditional roots."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl text-[#155E63] mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Companies;
