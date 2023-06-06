import { MdLink, MdPhotoLibrary, MdCode } from "react-icons/md";
import { motion } from "framer-motion";

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
    <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
      <div className="px-2 py-1 mb-2 border border-gray-700 border-solid rounded-full bg-pink-50 w-fit">
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <div className="px-4 py-6 mb-8 bg-white border-2 border-gray-700 border-solid rounded-xl md:mb-10">
          <h2 className="mb-4 text-2xl md:text-3xl md:mb-6">{title}</h2>
          <p className="mb-4 md:text-lg md:mb-6">{desc}</p>
          <div className="flex mb-4">
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 md:text-xl md:mr-6">
                <MdLink />
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 md:text-xl md:mr-6">
                <MdCode />
              </a>
            )}
            {gallery && (
              <a
                href={gallery}
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-lg text-gray-700 md:text-xl md:mr-6"
              >
                <MdPhotoLibrary />
              </a>
            )}
          </div>
        </div>
    </motion.div>
  );
};
