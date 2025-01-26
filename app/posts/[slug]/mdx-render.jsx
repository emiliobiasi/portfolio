"use client";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function MdxRenderer({ mdxSource }) {
  return <MDXRemote {...mdxSource} />;
}
