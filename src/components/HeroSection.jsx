import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import aim1 from "../assets/aim1.png";
import aim2 from "../assets/aim2.png";
import aim3 from "../assets/aim3.png";

const slides = [
  {
    image: aim1,
    title: "Shaping Values Through Art & Cultural Learning",
    text: "To instill moral values through art and create a strong bridge of communication between parents and students, fostering emotionally aware, responsible, and value-driven individuals.",
  },
  {
    image: aim2,
    title: "Building Creativity with Cultural Roots",
    text: "Encouraging children to express emotions, understand traditions, and grow with creativity that connects culture and imagination.",
  },
  {
    image: aim3,
    title: "Nurturing Responsible Future Citizens",
    text: "Helping students develop confidence, discipline, and moral strength through artistic and cultural engagement.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <img
            src={slides[index].image}
            alt="Our Aim"
            className="w-full h-full object-cover"
          />

          {/* Strong Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              
              {/* Glass Content Box */}
              <div className="bg-black/55 backdrop-blur-md rounded-2xl p-6 md:p-10 max-w-3xl shadow-2xl">
                
                {/* OUR AIM */}
                <motion.h2
                  className="text-5xl md:text-7xl font-extrabold mb-4 text-[#B1EAEA] drop-shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  OUR AIM
                </motion.h2>

                {/* Title */}
                <motion.h3
                  className="text-2xl md:text-4xl font-bold mb-4 text-white drop-shadow-md"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {slides[index].title}
                </motion.h3>

                {/* Paragraph */}
                <motion.p
                  className="text-base md:text-lg leading-relaxed text-gray-100 drop-shadow"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {slides[index].text}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
