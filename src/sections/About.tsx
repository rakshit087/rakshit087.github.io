import { PrimaryButton } from "../components/PrimaryButton";
import { constants } from "../constants";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 py-24 snap-start snap-always md:px-32 fill-screen"
    >
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
        <div className="mb-8 text-lg md:text-xl md:mb-16">{constants.about}</div>
        <div className="flex flex-col md:flex-row">
          {constants.aboutURLs.map((aboutUrl, index) => (
            <PrimaryButton key={index} label={aboutUrl.title} href={aboutUrl.url} />
          ))}
        </div>
      </div>
    </section>
  );
};
