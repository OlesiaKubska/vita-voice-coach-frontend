import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import { getPosts } from "../../lib/api";
import { Post } from "../../lib/types";

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={
                post.content ? post.content.substring(0, 100) + "..." : ""
              }
              slug={post.slug}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
