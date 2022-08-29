import { motion } from 'framer-motion';
import { CgScrollV } from 'react-icons/cg';
export const Intro = () => {
  return (
    <div id="intro" className="flex flex-col items-center justify-center h-screen snap-start snap-mandatory">
      <div>
        <p className="text-xl tracking-wider">Hi, I am</p>
        <p className="text-3xl tracking-wider">
          Rakshit <strong>Arora</strong>,
        </p>
        <p className="mt-2 text-lg">and I love building cool stuff 🛠</p>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <CgScrollV className="absolute bottom-5" />
      </motion.div>
    </div>
  );
};
