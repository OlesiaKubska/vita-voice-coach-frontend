import { getPosts } from "../../../lib/api";
import { Post } from "../../../lib/types";
import PostContent from "@/components/blog/PostContent";

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();

  return posts
    .map((post) => {
      type PostLike = { slug?: string; attributes?: { slug?: string } };
      const raw =
        (post as PostLike)?.slug ?? (post as PostLike)?.attributes?.slug ?? "";
      const slug = typeof raw === "string" ? raw : String(raw || "");
      return slug ? { slug } : null;
    })
    .filter(Boolean) as { slug: string }[];
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const posts: Post[] = await getPosts();

  type PostLike = { slug?: string; attributes?: { slug?: string } };
  const post = posts.find((p): p is Post => {
    const raw =
      (p as PostLike)?.slug ?? (p as PostLike)?.attributes?.slug ?? "";
    const s = typeof raw === "string" ? raw : String(raw || "");
    return s === slug;
  });

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <PostContent post={post} />
    </main>
  );
}
