import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
  name: string;
  url: string;
  img: string;
  desc: string;
  altImg: string;
}

export function Project({ desc, img, name, url, altImg }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="w-full h-full border rounded-sm overflow-hidden hover:bg-muted transition-colors duration-150"
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          fill
          className="w-full h-48 object-cover rounded-tr-sm rounded-tl-sm"
          src={img}
          alt={altImg}
        />
      </AspectRatio>
      <div className="p-1 leading-tight mt-1">
        <p>{name}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </a>
  );
}
