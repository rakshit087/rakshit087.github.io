import { ProjectCard } from "../components/ProjectCard";
import data from "../data/projects.json";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type projects = {
  title: string;
  desc: string;
  date: string;
  gallery: string | undefined;
  code: string | undefined;
  live: string | undefined;
  tags: string[];
}[];

export const Projects = () => {
  const projects: projects = data;
  const swiperElRef = useRef(null);

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24 px-8 h-screen min-h-screen lg:py-32 lg:px-32 add-bg snap-start snap-always"
    >
      <p className="mb-12 text-3xl font-bold md:text-4xl">Personal Projects</p>
      <Swiper
        ref={swiperElRef}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
