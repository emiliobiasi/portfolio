import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";

import MdxRenderer from "./mdx-render"; // seu Client Component

const postsDirectory = path.join(process.cwd(), "posts");

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

export default async function Page({ params }) {
  const { slug } = params;
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <>
      <Link href="/">
        <button className="mt-20 mx-4 bg-slate-200 px-6 py-2 font-semibold rounded-lg text-slate-950">
          <IoHome />
        </button>
      </Link>
      <div className="my-20 px-2 mx-auto prose prose-headings:text-slate-400 prose-p:text-slate-300">
        {/* Se quiser, pode exibir também o título do frontmatter */}
        <h1>{data.title}</h1>

        {/* Passamos o mdxSource serializado para o MdxRenderer */}
        <MdxRenderer mdxSource={mdxSource} />
      </div>
    </>
  );
}
