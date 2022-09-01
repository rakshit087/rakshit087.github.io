import { MdLink, MdPhotoLibrary, MdCode } from 'react-icons/md';
import { motion } from 'framer-motion';

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
    <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }}>
      <div className="px-2 py-1 mb-2 border border-gray-700 border-solid rounded-full bg-pink-50 w-fit">
        <p className="text-xs">{date}</p>
      </div>
      <div className="w-full mb-8 bg-white border-2 border-gray-700 border-solid rounded-xl">
        <div
          className="relative right-0 w-5 h-5 -translate-y-1/2 bg-gray-700 border-2 border-gray-400 border-solid rounded-full top-1/2"
          style={{
            right: '29px',
          }}
        ></div>
        <div className="px-4">
          <h2 className="mb-4 text-2xl">{title}</h2>
          <p className="mb-4">{desc}</p>
          <div className="flex mb-4">
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 underline">
                <MdLink />
              </a>
            )}
            {code && (
              <a href={code} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700">
                <MdCode />
              </a>
            )}
            {gallery && (
              <a href={gallery} target="_blank" rel="noreferrer" className="mr-4 text-lg text-gray-700 underline">
                <MdPhotoLibrary />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
