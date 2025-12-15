import React from "react";
import Achieve from "../assets/achievement.png";
import { FaChalkboardTeacher, FaSchool, FaHandsHelping } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Achievement = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <FaChalkboardTeacher size={30} className="text-[#155E63]" />,
      count: 178,
      suffix: "+",
      label: "Teachers",
    },
    {
      icon: <PiStudentFill size={30} className="text-[#155E63]" />,
      count: 476368,
      suffix: "",
      label: "Students",
    },
    {
      icon: <FaSchool size={30} className="text-[#155E63]" />,
      count: 388,
      suffix: "+",
      label: "Schools",
    },
    {
      icon: <FaHandsHelping size={30} className="text-[#155E63]" />,
      count: 56,
      suffix: "+",
      label: "NGOs",
    },
  ];

  return (
    <section className="w-full bg-[#F0FAF9] py-20">
      <div
        ref={ref}
        className="md:max-w-[1100px] max-w-[90%] mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#155E63]">
            Our Achievements
          </h2>

          <p className="text-[#334155] text-lg md:text-xl">
            Empowering education through art, culture, and value-based learning
            across schools and communities.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md"
              >
                <div className="p-4 bg-[#E6F4F3] rounded-xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#155E63]">
                    {inView ? (
                      <>
                        <CountUp
                          end={item.count}
                          duration={2}
                          separator=","
                        />
                        {item.suffix}
                      </>
                    ) : (
                      "0"
                    )}
                  </h3>
                  <p className="text-[#60737a]">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={Achieve}
            alt="Achievements"
            className="max-w-md w-full rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Achievement;
