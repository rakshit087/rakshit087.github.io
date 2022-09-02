import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed z-50 flex justify-between px-4 py-2 border-2 border-gray-700 rounded-full backdrop-blur-md right-8 top-8 ">
        <button
          className="p-1"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <IoMenu className="text-xl" />
        </button>
      </nav>
      <motion.div
        className={
          open ? 'absolute bg-white w-screen h-80 z-20 shadow-lg flex flex-col justify-center items-center' : 'hidden'
        }
        animate={open ? 'open' : 'closed'}
        variants={variants}
      >
        <a href="#intro">Intro</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </motion.div>
    </>
  );
};
