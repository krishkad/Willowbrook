// import BlogPost from "@/components/BlogPost";
// import { blogPosts } from "@/data/BlogData";
// import React from "react";

// interface PageProps {
//   params: { slug: string };
// }

// async function BlogPostPage({ params }: PageProps) {
//   const { slug } = params;
//   return <BlogPost slug={slug} />;
// }

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export default BlogPostPage;

// app/blog/[slug]/page.tsx

import BlogPost from "@/components/BlogPost";
import { blogPosts } from "@/data/BlogData";
import React from "react";

// 'params' is passed from the file-based routing
interface PageProps {
  params: {
    slug: string;
  };
}

// This should be an async function to allow await if needed
const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = params;

  return <BlogPost slug={slug} />;
};

export default BlogPostPage;

// Generate static paths for prerendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Optional: if you want to allow fallback for non-prebuilt pages
export const dynamicParams = true;
