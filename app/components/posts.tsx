import glob from "fast-glob";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";

export async function Posts() {
  let pages = await glob("**/*.mdx", { cwd: "app/posts" });
  let posts = await Promise.all(
    pages.map(async (filename) => ({
      path: "/posts/" + filename.replace(/(^|\/)page\.mdx$/, ""),
      meta: (await import(`../posts/${filename}`)).metadata,
    }))
  );
  posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));

  return (
    <section>
      <SectionHeading>Writing</SectionHeading>
      <div className="-mx-3 flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.meta.title}
            href={post.path}
            className="group flex items-baseline justify-between gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-muted"
          >
            <span className="flex items-center gap-1 font-medium">
              {post.meta.title}
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <time className="shrink-0 font-mono text-xs text-muted-foreground">
              {post.meta.date}
            </time>
          </Link>
        ))}
      </div>
    </section>
  );
}
