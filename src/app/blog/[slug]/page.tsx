import { notFound } from "next/navigation";
import { getPosts } from "../../../lib/api";
import { Post } from "../../../lib/types";
import PostContent from "@/components/blog/PostContent";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  try {
    const posts: Post[] = await getPosts();

    type PostLike = { slug?: string; attributes?: { slug?: string } };

    const list = (posts || [])
      .map((post) => {
        const raw =
          (post as PostLike)?.slug ??
          (post as PostLike)?.attributes?.slug ??
          "";
        const slug = typeof raw === "string" ? raw : String(raw || "");
        return slug ? { slug } : null;
      })
      .filter(Boolean) as Array<{ slug: string }>;

    const unique = [...new Set(list.map((s) => s.slug))].map((slug) => ({
      slug,
    }));
    return unique;
  } catch (error) {
    console.error("[generateStaticParams] failed:", error);
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let posts: Post[] = [];
  try {
    posts = await getPosts();
  } catch (e) {
    console.error("[BlogPostPage] getPosts failed:", e);
  }

  type PostLike = { slug?: string; attributes?: { slug?: string } };
  const post = posts.find((p): p is Post => {
    const raw =
      (p as PostLike)?.slug ?? (p as PostLike)?.attributes?.slug ?? "";
    const s = typeof raw === "string" ? raw : String(raw || "");
    return s === slug;
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <PostContent post={post as Post} />
    </main>
  );
}
