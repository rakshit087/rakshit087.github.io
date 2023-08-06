import { SiGmail, SiTwitter, SiGithub, SiHashnode, SiYoutube } from "react-icons/si";

export const Connect = () => {
  return (
    <section
      id="connect"
      className="relative flex flex-col items-center justify-center h-screen px-8 snap-end md:px-32 snap-always"
    >
      <div className="max-w-xl px-8 py-12 rounded-lg add-bg">
        <p className="mb-4 text-3xl font-bold text-center md:text-4xl md:mb-8">Contact Me</p>
        <p className="mb-8 text-md md:text-xl md:mb-16">
          I love connecting with different people and it would be awesome if we could get in touch :) 
          You can schedule a meet with me on Cal <a href="https://cal.com/rakshit087" className="text-blue-900">here.</a> 
          You can also find me on these platforms:
        </p>
        <div className="flex items-center justify-around w-full py-6 text-3xl rounded-xl">
          <a href="mailto:rakshit087@gmail.com">
            <SiGmail />
          </a>
          <a href="https://twitter.com/rakshit087/" target="_blank" rel="noreferrer">
            <SiTwitter />
          </a>
          <a href="https://github.com/rakshit087/" target="_blank" rel="noreferrer">
            <SiGithub />
          </a>
          <a href="https://rakshit087.hashnode.dev/" target="_blank" rel="noreferrer">
            <SiHashnode />
          </a>
          <a href="https://www.youtube.com/channel/UCA446V0YEkL_BeBZt8gXFHg" target="_blank" rel="noreferrer">
            <SiYoutube />
          </a>
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
