import React, { useRef } from "react";
import { useMove } from "../hooks/useMove";
import { useApp, View } from "../../App";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";

function SkillsSection() {
  const ref = useRef(null);
  const { setCurrentView } = useApp();
  useMove(ref, (dir) => {
    if (dir === "UP") {
      setCurrentView(View.HERO);
    }
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex justify-center items-center"
      ref={ref}
    >
      Skills Section
    </motion.div>
  );
}

export default SkillsSection;
