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
        className={open ? 'absolute fill-screen z-20' : 'hidden'}
        animate={open ? 'open' : 'closed'}
        variants={variants}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="z-30 py-20 bg-white shadow-lg px-14">
          <p className="mb-4 text-2xl font-bold">Jump To</p>
          <div className="flex flex-col">
            <a
              href="#intro"
              className="mb-2 text-xl"
              onClick={() => {
                setOpen(false);
              }}
            >
              Intro
            </a>
            <a
              href="#about"
              className="mb-2 text-xl"
              onClick={() => {
                setOpen(false);
              }}
            >
              About Me
            </a>
            <a
              href="#projects"
              className="mb-2 text-xl"
              onClick={() => {
                setOpen(false);
              }}
            >
              My Projects
            </a>
            <a
              href="#connect"
              className="mb-2 text-xl"
              onClick={() => {
                setOpen(false);
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
