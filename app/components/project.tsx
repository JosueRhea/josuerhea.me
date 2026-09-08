import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Props {
  name: string;
  url: string;
  img: string;
  desc: string;
  altImg: string;
  idx: number;
}

export function Project({ desc, img, name, url, altImg }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-muted"
    >
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
        <Image
          fill
          sizes="96px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          src={img}
          alt={altImg}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1 font-medium">
          {name}
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </p>
        <p className="mt-0.5 truncate text-sm text-muted-foreground">{desc}</p>
      </div>
    </a>
  );
}
