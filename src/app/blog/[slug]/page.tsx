import { blogPosts } from "@/data/BlogData";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";

// ✅ This is the correct type for a route page in App Router
interface PageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return <BlogPost slug={slug} />;
};

export default BlogPostPage;

// ✅ generateStaticParams returns an array of params for static paths
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Optional: allow dynamic slugs at runtime
export const dynamicParams = true;
