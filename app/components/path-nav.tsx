import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
interface Props {
  title: string;
}

export const PathNav = ({ title }: Props) => {
  return (
    <nav className="w-full flex items-center gap-x-2">
      <Link className="text-muted-foreground" href="/">Home</Link>
      <ChevronRightIcon />
      <Link className="text-muted-foreground" href="/">Posts</Link>
      <ChevronRightIcon />
      <Link className="font-semibold" href="/home">{title}</Link>
    </nav>
  );
};
