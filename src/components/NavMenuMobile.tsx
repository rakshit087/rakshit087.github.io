import { motion } from "framer-motion";

interface navMenuProps {
  open: boolean;
  setOpen: any;
}

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export const NavMenuMobile = ({ open, setOpen }: navMenuProps) => {
  return (
    <motion.div
      className={open ? "absolute fill-screen z-20 right-0 top-0" : "hidden"}
      animate={open ? "open" : "closed"}
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
  );
};
