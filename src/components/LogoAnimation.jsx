import React from "react";
import { motion } from "framer-motion";

const LogoAnimation = () => {
  return (
    <div className="hidden md:flex items-center justify-center w-1/2">
      {/* Outer Rotating Shape */}
      <motion.div
        className="w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center shadow-xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {/* Inner Pulsating Shape */}
        <motion.div
          className="w-20 h-20 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LogoAnimation;
