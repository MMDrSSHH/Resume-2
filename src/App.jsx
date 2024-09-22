import { createContext, useContext, useRef, useState } from "react";
import { useMove } from "./components/hooks/useMove";
import HeroSection from "./components/sections/HeroSection";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import SkillsSection from "./components/sections/SkillsSection";

const appContext = createContext();

export const View = {
  HERO: "HERO",
  SKILLS: "SKILLS",
};

function App() {
  // Current view to be displayed in the app
  const [currentView, setCurrentView] = useState(View.HERO);
  return (
    <appContext.Provider value={{ setCurrentView }}>
      <main className="w-full h-screen bg-zinc-100">
        <MotionConfig transition={{
          type: "just"
        }}>
          <AnimatePresence mode="wait">
            {currentView === View.HERO && (
              <motion.section
                key={View.HERO}
                className="fixed top-0 left-0 h-full w-full"
              >
                <HeroSection />
              </motion.section>
            )}

            {currentView === View.SKILLS && (
              <motion.section
                key={View.SKILLS}
                className="fixed top-0 left-0 h-full w-full"
              >
                <SkillsSection />
              </motion.section>
            )}
          </AnimatePresence>
        </MotionConfig>
      </main>
    </appContext.Provider>
  );
}

/**
 * @summary app context hook
 * @returns {{setCurrentView: React.Dispatch<React.SetStateAction<undefined>>}} app context values
 */
export function useApp() {
  return useContext(appContext);
}

export default App;
