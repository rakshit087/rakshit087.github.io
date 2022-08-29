import Image from 'next/image';
import { IoAirplane } from 'react-icons/io5';

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-12 bg-no-repeat">
      <p className="mb-4 text-3xl font-bold">About</p>
      <p className="mb-16 text-lg text-center">
        As a builder, I am passionate about bringing ideas to life and writing awesome code that delivers impact and
        translates to amazing user experience ✨.
      </p>
      <p className="text-xl font-semibold">Other than Dev I ❤️</p>
      <div className="flex justify-between w-5/6 mt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50">
          <Image src="/images/naruto.svg" alt="anime" width={32} height={32} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50">
          <Image src="/images/league.svg" alt="anime" width={32} height={32} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-50">
          <IoAirplane fontSize={24} />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50">
          <Image src="/images/music.svg" alt="anime" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};
