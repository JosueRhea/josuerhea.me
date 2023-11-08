import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  title: string;
}

export const PathNav = ({ title }: Props) => {
  return (
    <nav className="w-full flex items-center gap-x-2">
      <Link className="text-muted-foreground no-underline hover:underline" href="/">Home</Link>
      <ChevronRightIcon />
      <Link className="text-muted-foreground no-underline hover:underline" href="/">Posts</Link>
      <ChevronRightIcon />
      <Link className="font-semibold no-underline hover:underline" href="/home">{title}</Link>
    </nav>
  );
};
