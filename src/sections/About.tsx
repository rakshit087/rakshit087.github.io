import { PrimaryButton } from "../components/PrimaryButton";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 py-24 bg-bottom bg-no-repeat fill-screen snap-start snap-always md:px-32 bg-waveMobile lg:bg-wave"
    >
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
        <div className="mb-8 text-lg md:text-xl md:mb-16">
          <p className="mb-4">
            I am a lifelong learner with experience in Full Stack Development and Automation. I am passionate about
            bringing ideas to life and writing readable and beautiful code.
          </p>
          <p>
            In addition to development, I enjoy travelling, watching anime, listening to music, reading fiction and
            helping communities and individuals.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <PrimaryButton label="Resume" href="https://bit.ly/rakshit-resume" />
          <PrimaryButton label="Mind Map" href="https://rakshit087.github.io/mind-map" />
        </div>
      </div>
    </section>
  );
};
