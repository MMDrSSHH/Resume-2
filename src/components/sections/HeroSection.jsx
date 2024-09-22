import React, { useRef } from "react";
import { useApp, View } from "../../App";
import { useMove } from "../hooks/useMove";
import SkillsSection from "./SkillsSection";
import { motion } from "framer-motion";
import Container from "../shared/Container";

function HeroSection() {
  const { setCurrentView } = useApp();
  const ref = useRef(null);
  useMove(ref, (dir) => {
    if (dir === "DOWN") {
      setCurrentView(View.SKILLS);
    }
  });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3
          }
        },
      }}
      className="h-full overflow-hidden"
      ref={ref}
    >
      <Container className="h-full">
        <div className="h-full flex justify-between mt-[360px]">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            this isa qjngoqgqegq gjn qgij q jgneq
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}

export default HeroSection;
