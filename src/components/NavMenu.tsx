const buttonClasses =
  "px-2 py-1 mr-4 text-lg border-2 border-gray-700 border-solid rounded-full bg-gradient-to-br from-pink-50 to-cyan-50";

export const NavMenu = () => {
  return (
    <div className="hidden lg:flex">
      <a href="#intro" className={buttonClasses}>
        Intro
      </a>
      <a href="#about" className={buttonClasses}>
        About Me
      </a>
      <a href="#projects" className={buttonClasses}>
        My Projects
      </a>
      <a href="#connect" className={buttonClasses}>
        Contact Me
      </a>
    </div>
  );
};
