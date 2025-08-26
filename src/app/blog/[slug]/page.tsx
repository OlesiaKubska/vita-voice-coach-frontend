import { getPosts } from "../../../lib/api";
import Image from "next/image";
import { Post } from "../../../lib/types";

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const posts: Post[] = await getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <>
      <main className="max-w-3xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        {post.coverImage && (
          <Image
            src={`http://localhost:1337${post.coverImage.url}`}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
        )}

        <article className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  );
}
