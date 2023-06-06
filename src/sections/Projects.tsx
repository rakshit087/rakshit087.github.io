import { ProjectCard } from "../components/ProjectCard";
import data from "../data/projects.json";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type projects = {
  title: string;
  desc: string;
  date: string;
  gallery: string | undefined;
  code: string | undefined;
  live: string | undefined;
  tags: string[];
}[];

const tags = ["all", "automation", "full stack", "system", "web 3"];

export const Projects = () => {
 const projects: projects = data;
  const swiperElRef = useRef(null);

  return (
    <section
      id="projects"
      className="flex flex-col items-center h-screen min-h-screen px-8 py-24 add-bg md:px-32 lg:py-32 snap-start snap-always"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <p className="mb-6 text-3xl font-bold md:text-4xl">Personal Projects</p>
        <Swiper
          ref={swiperElRef}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
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
      </div>
    </section>
  );
};
