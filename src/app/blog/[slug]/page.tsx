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


import BlogPost from "@/components/BlogPost";
import { blogPosts } from "@/data/BlogData";
import React from "react";

interface BlogPageProps {
  params: { slug: string };
}

async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = params;

  return <BlogPost slug={slug} />;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = true; // Optional, ensures [slug] is treated dynamically

export default BlogPostPage;


