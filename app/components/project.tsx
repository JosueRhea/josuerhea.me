"use client";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { motion } from "framer-motion";

interface Props {
  name: string;
  url: string;
  img: string;
  desc: string;
  altImg: string;
  idx: number;
}

export function Project({ desc, img, name, url, altImg, idx }: Props) {
  const rotation = idx % 2 === 0 ? -3 : 3;

  return (
    <motion.a
      href={url}
      target="_blank"
      className="w-full h-full rounded-sm grid grid-cols-2 items-center transition-colors duration-150 gap-2"
      initial={{
        opacity: 0,
        transform: `translateY(100px)`,
      }}
      animate={{
        opacity: 1,
        transform: `rotate(${rotation}deg) translateY(0)`,
        // transition: {
        //   type: "spring",
        //   stiffness: 300,
        // },
      }}
      transition={{
        delay: idx * 0.1,
        duration: 0.3,
      }}
    >
      {idx % 2 !== 0 && (
        <div className="leading-tight">
          <p>{name}</p>
          <p className="text-sm text-muted-foreground underline">{desc}</p>
        </div>
      )}
      <AspectRatio ratio={16 / 9}>
        <Image
          fill
          className="w-full h-48 object-cover rounded-sm"
          src={img}
          alt={altImg}
        />
      </AspectRatio>

      {idx % 2 === 0 && (
        <div className="leading-tight">
          <p>{name}</p>
          <p className="text-sm text-muted-foreground underline">{desc}</p>
        </div>
      )}
    </motion.a>
  );
}
