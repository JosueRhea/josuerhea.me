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

  return (
    <section className="mx-auto w-full max-w-lg mt-10">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Posts
      </h3>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4">
        {posts.map((post) => (
          <Link
            key={post.meta.title}
            className={
              "p-1 w-full h-full border rounded-sm transition-colors duration-200 relative bg-muted"
            }
            href={post.path}
          >
            <div className="absolute inset-0 overflow-hidden">
              <GridPattern
                width={30}
                height={20}
                x="-12"
                y="4"
                squares={[
                  [4, 3],
                  [2, 1],
                  [7, 3],
                  [10, 6],
                ]}
                className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/60 mix-blend-overlay"
              />
            </div>
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
