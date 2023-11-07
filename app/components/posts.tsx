import glob from "fast-glob";
import Link from "next/link";

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
            className={"p-1 w-full h-full border border-secondary rounded-sm hover:bg-muted transition-colors duration-200"}
            href={post.path}
          >
            <p>{post.meta.title}</p>
            <p className="text-sm text-muted-foreground">{post.meta.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
