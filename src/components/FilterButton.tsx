import { motion } from "framer-motion";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";

interface FilterButtonProps {
  selectedTag: string;
  tags: string[];
  setTag: any;
}

const parentVariants = {
  hidden: { opacity: 0, y: "-10%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  tapped: { scale: 0.95 },
  hovered: { scale: 1.1 },
};

export const FilterButton = ({ selectedTag, tags, setTag }: FilterButtonProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col items-end justify-end w-full mb-6">
      <button
        id="dropdownDefault"
        className="flex items-center justify-center md:text-lg"
        type="button"
        onClick={() => setOpened(!opened)}
      >
        <MdFilterList className="mr-1" /> Filter
      </button>
      <motion.div
        id="dropdown"
        className={
          opened
            ? "bg-white absolute flex border-2 border-gray-700 rounded-lg shadow-xl py-2 z-10 flex-col top-8 px-1"
            : "hidden"
        }
        animate={opened ? "visible" : "hidden"}
        variants={parentVariants}
      >
        {tags.map((tag: string, index: any) => (
          <motion.p
            key={index}
            className={`mb-2 px-4 md:text-lg cursor-pointer ${selectedTag === tag ? "bg-cyan-50" : ""}}`}
            onClick={() => {
              setTag(tag);
              setOpened(false);
            }}
            variants={childVariants}
            whileHover={selectedTag === tag ? "" : "hovered"}
            whileTap="tapped"
            initial="hidden"
            animate="visible"
          >
            {tag}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};
