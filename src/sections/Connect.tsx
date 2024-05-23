import { SiGmail, SiTwitter, SiGithub, SiHashnode, SiYoutube } from "react-icons/si";
import { constants } from "../constants";

export const Connect = () => {
  return (
    <section
      id="connect"
      className="relative flex flex-col items-center justify-center h-screen px-8 snap-end md:px-32 snap-always"
    >
      <div className="max-w-xl px-8 py-12 rounded-lg add-bg">
        <p className="mb-4 text-3xl font-bold text-center md:text-4xl md:mb-8">Contact Me</p>
        <p className="mb-8 text-md md:text-xl md:mb-16">{constants.contactContent}</p>
        <div className="flex items-center justify-around w-full py-6 text-3xl rounded-xl">
          {constants.contactURLs.gmail && (
            <a href={constants.contactURLs.gmail}>
              <SiGmail />
            </a>
          )}
          {constants.contactURLs.twitter && (
            <a href={constants.contactURLs.twitter} target="_blank" rel="noreferrer">
              <SiTwitter />
            </a>
          )}
          {constants.contactURLs.github && (
            <a href={constants.contactURLs.github} target="_blank" rel="noreferrer">
              <SiGithub />
            </a>
          )}
          {constants.contactURLs.hashnode && (
            <a href={constants.contactURLs.hashnode} target="_blank" rel="noreferrer">
              <SiHashnode />
            </a>
          )}
          {constants.contactURLs.youtube && (
            <a href={constants.contactURLs.youtube} target="_blank" rel="noreferrer">
              <SiYoutube />
            </a>
          )}
        </div>
      </div>
      <footer className="absolute text-xs bottom-4 text-center">
        <span>
          Designed with 💜 by{" "}
          <a href="https://rakshit087.github.io" className="underline">
            Rakshit
          </a>
        </span>
        <div className="text-gray-400 italic">
          Source code available on{" "}
          <a href="https://github.com/rakshit087/rakshit087.github.io" className="underline">
            GitHub
          </a>
        </div>
      </footer>
    </section>
  );
};
