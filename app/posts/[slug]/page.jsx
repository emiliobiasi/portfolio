import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import MdxRenderer from "./mdx-render";

const postsDirectory = path.join(process.cwd(), "posts");

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

export const dynamicParams = false;

export default async function Page(props) {
  const params = await props.params;
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
        <h1>{data.title}</h1>
        <MdxRenderer mdxSource={mdxSource} />
      </div>
    </>
  );
}
