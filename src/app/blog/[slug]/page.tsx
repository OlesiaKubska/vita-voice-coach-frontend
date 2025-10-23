import { notFound } from "next/navigation";
import { getPosts } from "../../../lib/api";
import { Post } from "../../../lib/types";
import PostContent from "@/components/blog/PostContent";

function getPostSlug(post: Post): string | null {
  if ("slug" in post && typeof post.slug === "string") {
    return post.slug;
  }
  if (
    "attributes" in post &&
    post.attributes &&
    "slug" in post.attributes &&
    typeof post.attributes.slug === "string"
  ) {
    return post.attributes.slug;
  }
  return null;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  try {
    const posts: Post[] = await getPosts();

    if (!Array.isArray(posts)) {
      console.error(
        "[generateStaticParams] getPosts did not return an array:",
        posts
      );
      return [];
    }

    const list = posts
      .map((post) => {
        const slug = getPostSlug(post);
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
  params: { slug: string };
}) {
  const { slug } = params;

  let posts: Post[] = [];
  try {
    posts = await getPosts();
    if (!Array.isArray(posts)) {
      console.error("[BlogPostPage] getPosts did not return an array:", posts);
      posts = [];
    }
  } catch (e) {
    console.error("[BlogPostPage] getPosts failed:", e);
  }

  const post = posts.find((p) => getPostSlug(p) === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <PostContent post={post} />
    </main>
  );
}
