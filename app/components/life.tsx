"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/photos/1.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/6.jpg",
];

interface SingleImageProps {
  src: string;
  index: number;
}

const MotionImage = motion(Image);

function SingleImage({ src, index }: SingleImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const randomRotation = useMemo(() => {
    return Math.floor(Math.random() * 40) - 20;
  }, []);

  return (
    <MotionImage
      src={src}
      alt="placeholder"
      width={200}
      height={200}
      onLoad={() => setImageLoaded(true)}
      className="w-full object-cover aspect-square rounded-xl"
      animate={{
        opacity: 1,
        transform: `rotate(${randomRotation}deg) scale(1.1)`,
        transition: {
          delay: index * 0.1,
        },
        zIndex: 5,
      }}
      // sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%"
      initial={{
        opacity: 0,
        transform: `rotate(${randomRotation}deg) scale(0)`,
      }}
      whileHover={{
        transform: `rotate(0deg) scale(1.5)`,
        zIndex: 10,
      }}
      exit={{
        opacity: 0,
        transform: `rotate(${randomRotation}deg) scale(0)`,
      }}
    />
  );
}

export function Life() {
  return (
    <section className="mx-auto w-full max-w-lg mt-10">
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 mt-8 px-4">
        <AnimatePresence>
          {images.map((img, index) => (
            <SingleImage src={img} key={img} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
