import Image from "next/image";
import { SectionHeading } from "./section-heading";

const images = [
  { src: "/photos/1.jpg", alt: "A moment from life" },
  { src: "/photos/6.jpg", alt: "A moment from life" },
  { src: "/photos/2.jpg", alt: "A moment from life" },
];

export function Life() {
  return (
    <section>
      <SectionHeading>Life</SectionHeading>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 33vw, 180px"
              className="object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
