import { getPosts } from "../../../lib/api";
import { Post } from "../../../lib/types";
import PostContent from "../../../components/PostContent";

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const posts: Post[] = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <PostContent post={post} />
    </main>
  );
}
