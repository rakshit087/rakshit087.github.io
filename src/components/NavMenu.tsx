export const NavMenu = () => {
  return (
    <div className="hidden lg:flex">
      <a
        href="#intro"
        className="px-2 py-1 mr-4 text-lg border-2 border-gray-700 border-solid rounded-full bg-gradient-to-br from-pink-100 to-cyan-100"
      >
        Intro
      </a>
      <a
        href="#about"
        className="px-2 py-1 mr-4 text-lg border-2 border-gray-700 border-solid rounded-full bg-gradient-to-r from-pink-100 to-cyan-100"
      >
        About Me
      </a>
      <a
        href="#projects"
        className="px-2 py-1 mr-4 text-lg border-2 border-gray-700 border-solid rounded-full bg-gradient-to-bl from-pink-100 to-cyan-100"
      >
        My Projects
      </a>
      <a
        href="#connect"
        className="px-2 py-1 mr-4 text-lg border-2 border-gray-700 border-solid rounded-full bg-gradient-to-r from-pink-100 to-cyan-100"
      >
        Contact Me
      </a>
    </div>
  );
};
