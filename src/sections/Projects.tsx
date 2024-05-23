import { ProjectCard } from "../components/ProjectCard";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { constants } from "../constants";

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
  const projects: projects = constants.projects;
  const swiperElRef = useRef(null);

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24 px-8 h-screen min-h-screen lg:py-32 lg:px-32 add-bg snap-start snap-always"
    >
      <p className="mb-12 text-3xl font-bold md:text-4xl">Personal Projects</p>
      <Swiper
        ref={swiperElRef}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, el: "#projects-pagination" }}
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
      <div id="projects-pagination" className="w-full justify-center flex" />
    </section>
  );
};
