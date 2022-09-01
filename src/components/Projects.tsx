import { ProjectCard } from './ProjectCard';
import data from '../data/projects.json';

export const Projects = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-8 py-24 snap-mandatory snap-start add-bg scroll-smooth">
      <p className="mb-8 text-3xl">Projects</p>
      <div className="flex w-full">
        <div className="mr-4 border border-gray-400 border-2-2"></div>
        <div className="w-full">
          {data.map((project, id) => {
            return (
              <ProjectCard
                key={id}
                title={project.title}
                desc={project.desc}
                date={project.date}
                code={project.code}
                gallery={project.gallery}
                live={project.live}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
