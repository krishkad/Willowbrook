import { blogPosts } from "@/data/BlogData";
import BlogPost from "@/components/BlogPost";

const BlogPostPage = () => {



  return <BlogPost />;
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
