import { SiGmail, SiTwitter, SiGithub, SiHashnode, SiYoutube } from 'react-icons/si';

export const Connect = () => {
  return (
    <section id="connect" className="flex flex-col items-center justify-center h-screen px-8 snap-end">
      <div className="px-8 py-12 rounded-lg add-bg">
        <p className="mb-4 text-3xl font-bold text-center">Contact Me</p>
        <p className="mb-8 text-md">
          I love connecting with different people and it would be awesome if we could get in touch :) You can find me on
          these platforms:
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
    </section>
  );
};
