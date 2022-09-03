export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 py-24 bg-no-repeat fill-screen snap-start snap-always md:px-32"
      style={{
        backgroundImage: "url('/images/bg-wave.svg')",
        backgroundPosition: 'bottom',
      }}
    >
      <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
      <div className="mb-8 text-lg md:text-xl md:mb-16">
        <p className="mb-4">
          I am a lifelong learner with experience in Full Stack Development and Automation. I am extremly passionate
          about writing code that has an impact and can bring ideas to life.
        </p>
        <p>
          In addition to development, I enjoy playing LoL, travelling, watching anime, listening to music, reading
          fiction and helping communities and individuals.
        </p>
      </div>
      <a
        href="https://docs.google.com/document/d/1NPXhxng5PbFFkQKR9jrwVoAzo3lIAoyfFCGauFXx-3w/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="px-8 py-1 bg-white border-2 border-gray-700 rounded-full shadow-md md:text-lg">
          Resume
        </button>
      </a>
    </section>
  );
};
