import glob from "fast-glob";
import Link from "next/link";
import { GridPattern } from "./grid-pattern";

export async function Posts() {
  let pages = await glob("**/*.mdx", { cwd: "app/posts" });
  let posts = await Promise.all(
    pages.map(async (filename) => ({
      path: "/posts/" + filename.replace(/(^|\/)page\.mdx$/, ""),
      meta: (await import(`../posts/${filename}`)).metadata,
    }))
  );
  console.log(posts);

  return (
    <section className="mx-auto w-full max-w-lg mt-10">
      <h3 className="scroll-m-20 text-left text-2xl font-semibold tracking-tight">
        Posts
      </h3>
      <div className="w-full grid grid-cols-1 mt-4 gap-4">
        {posts.map((post) => (
          <Link
            key={post.meta.title}
            className={
              "p-1 w-full h-full rounded-sm transition-colors duration-200 relative underline"
            }
            href={post.path}
          >
            <div className="z-20">
              <p className="z">{post.meta.title}</p>
              <p className="text-sm text-muted-foreground">{post.meta.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
