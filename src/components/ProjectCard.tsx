import React from "react";
import { MdLink, MdPhotoLibrary, MdCode } from "react-icons/md";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const IconWrapper = ({ icon: Icon }: { icon: IconType }) => {
  return <Icon />;
};

interface project {
  title: string;
  desc: string;
  date: string;
  gallery: string | undefined;
  code: string | undefined;
  live: string | undefined;
}

export const ProjectCard = ({ title, desc, date, gallery, code, live }: project) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="flex flex-col h-full"
    >
      <div className="py-1 px-2 mb-2 bg-pink-50 rounded-full border border-gray-700 border-solid w-fit">
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <div className="flex flex-col flex-grow justify-between py-6 px-4 mb-8 bg-white rounded-xl border-2 border-gray-700 border-solid cursor-pointer md:mb-10">
        <h2 className="mb-4 text-2xl md:mb-6 md:text-3xl">{title}</h2>
        <p className="mb-4 md:mb-6">{desc}</p>
        <div className="flex">
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 md:mr-6 md:text-xl">
              <IconWrapper icon={MdLink} />
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 md:mr-6 md:text-xl">
              <IconWrapper icon={MdCode} />
            </a>
          )}
          {gallery && (
            <a
              href={gallery}
              target="_blank"
              rel="noreferrer"
              className="mr-4 text-lg text-gray-700 md:mr-6 md:text-xl"
            >
              <IconWrapper icon={MdPhotoLibrary} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
