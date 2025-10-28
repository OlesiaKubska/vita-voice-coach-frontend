import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/api";
import { Post } from "@/lib/types";
import PostContent from "@/components/blog/PostContent";

export const revalidate = 300;
export const dynamicParams = true;

function getPostSlug(post: Post): string | null {
  return typeof post?.slug === "string" ? post.slug : null;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  try {
    const posts = await getPosts();
    return (Array.isArray(posts) ? posts : [])
      .map(getPostSlug)
      .filter((slug): slug is string => Boolean(slug))
      .filter((slug, index, self) => self.indexOf(slug) === index)
      .map((slug) => ({ slug }));
  } catch (err) {
    console.error("[generateStaticParams] failed:", err);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.title;
  const description =
    post.content?.replace(/<[^>]+>/g, " ").slice(0, 160) || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <PostContent post={post} />
    </main>
  );
}
