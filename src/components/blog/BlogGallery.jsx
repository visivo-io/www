import React from 'react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    title: "Best practices for successful prototypes",
    excerpt: "Learn how to create effective prototypes that help validate your ideas and improve your development workflow.",
    imageUrl: "/images/blog/prototypes.webp",
    date: "Feb 8, 2022",
    author: "Jese Leos",
    slug: "best-practices-prototypes"
  },
  {
    title: "Introducing Version Control for BI",
    excerpt: "See how version control can transform your business intelligence workflow and improve team collaboration.",
    imageUrl: "/images/blog/version-control.webp",
    date: "Mar 15, 2022",
    author: "Sarah Johnson",
    slug: "version-control-bi"
  },
  // Add more blog posts as needed
];

const BlogGallery = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Blog
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Insights and updates from the Visivo team
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <Link to={`/blog/${post.slug}`}>
                <img 
                  className="rounded-t-lg w-full h-48 object-cover" 
                  src={post.imageUrl} 
                  alt={post.title} 
                />
              </Link>
              <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mb-3 text-gray-500 dark:text-gray-400 h-12 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {post.author}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGallery; 