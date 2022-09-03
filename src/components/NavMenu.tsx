import { motion } from "framer-motion";

const buttonClasses =
  "px-2 py-1 mr-4 text-lg border-2 border-gray-700 border-solid rounded-full bg-gradient-to-br from-pink-50 to-cyan-50";

const linkVariant = {
  tapped: { scale: 0.95 },
  hovered: { scale: 1.05 },
};

export const NavMenu = () => {
  return (
    <div className="hidden lg:flex">
      <motion.a href="#intro" className={buttonClasses} variants={linkVariant} whileHover="hovered" whileTap="tapped">
        Intro
      </motion.a>
      <motion.a href="#about" className={buttonClasses} variants={linkVariant} whileHover="hovered" whileTap="tapped">
        About Me
      </motion.a>
      <motion.a
        href="#projects"
        className={buttonClasses}
        variants={linkVariant}
        whileHover="hovered"
        whileTap="tapped"
      >
        My Projects
      </motion.a>
      <motion.a href="#connect" className={buttonClasses} variants={linkVariant} whileHover="hovered" whileTap="tapped">
        Contact Me
      </motion.a>
    </div>
  );
};
