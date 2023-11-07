import nextMDX from "@next/mdx";
import { recmaPlugins } from "./mdx/recma.mjs";
import { rehypePlugins } from "./mdx/rehype.mjs";
import { remarkPlugins } from "./mdx/remark.mjs";
import rehypeKatex from "rehype-katex";

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    // recmaPlugins,
    rehypePlugins: [[rehypeKatex, { throwOnError: true, strict: true }]],
  },
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
