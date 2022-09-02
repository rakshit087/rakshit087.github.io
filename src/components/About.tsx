import Image from 'next/image';
import { IoAirplane } from 'react-icons/io5';

export const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center px-12 bg-no-repeat fill-screen snap-start"
      style={{
        backgroundImage: "url('/images/bg-wave.svg')",
        backgroundPosition: 'bottom',
      }}
    >
      <p className="mb-4 text-3xl font-bold">About</p>
      <p className="mb-16 text-lg text-center">
        As a builder, I am passionate about bringing ideas to life and writing awesome code that delivers impact and
        translates to amazing user experience.
      </p>
      <p className="text-xl font-semibold">Other than Dev I ❤️</p>
      <div className="flex justify-between w-5/6 mt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-yellow-50">
          <Image src="/images/naruto.svg" alt="anime" width={32} height={32} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-purple-50">
          <Image src="/images/league.svg" alt="anime" width={32} height={32} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-cyan-50">
          <IoAirplane fontSize={24} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-pink-50">
          <Image src="/images/music.svg" alt="anime" width={32} height={32} />
        </div>
      </div>
      <a
        href="https://docs.google.com/document/d/1NPXhxng5PbFFkQKR9jrwVoAzo3lIAoyfFCGauFXx-3w/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="relative px-8 py-1 bg-white border-2 border-gray-700 rounded-full shadow-md top-16">
          Resume
        </button>
      </a>
    </div>
  );
};
