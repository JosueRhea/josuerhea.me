import { SectionHeading } from "./section-heading";

export const About = () => {
  return (
    <section>
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-base leading-relaxed text-foreground/90">
        <p>
          I&apos;m a software engineer who designs and builds products for the
          web and mobile. I care about reliable systems, clean interfaces, and
          shipping things that feel fast.
        </p>
      </div>
    </section>
  );
};
