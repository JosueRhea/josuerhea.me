import { projects } from "@/lib/projects";
import { Project } from "./project";

export function Projects() {
  return (
    <section className="mx-auto w-full max-w-lg mt-10">
      <h3 className="scroll-m-20 text-left text-2xl font-semibold tracking-tight">
        Side projects
      </h3>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4">
        {projects.map(({ altImg, desc, img, name, url }) => (
          <Project
            altImg={altImg}
            desc={desc}
            img={img}
            name={name}
            key={name}
            url={url}
          />
        ))}
      </div>
    </section>
  );
}
