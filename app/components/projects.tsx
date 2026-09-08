import { projects } from "@/lib/projects";
import { Project } from "./project";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section>
      <SectionHeading>Side projects</SectionHeading>
      <div className="-mx-3 flex flex-col">
        {projects.map(({ altImg, desc, img, name, url }, idx) => (
          <Project
            idx={idx}
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
