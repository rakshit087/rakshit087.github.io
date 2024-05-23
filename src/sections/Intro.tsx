import { motion } from "framer-motion";
import { constants } from "../constants";

export const Intro = () => {
  return (
    <section id="intro" className="flex flex-col items-center justify-center fill-screen snap-start add-bg">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <p className="text-xl tracking-wider md:text-2xl lg:text-3xl lg:mb-1">Hi, I am</p>
        <p className="text-3xl tracking-wider md:text-4xl lg:text-5xl lg:mb-1">
          {constants.name.split(" ")[0]} <strong>{constants.name.split(" ")[1]}</strong>,
        </p>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl ">{constants.tagline}</p>
      </motion.div>
    </section>
  );
};
