"use client";
import { MDXRemote } from "next-mdx-remote";

export default function MdxRenderer({ mdxSource }) {
  return <MDXRemote {...mdxSource} />;
}
