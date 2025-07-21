import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../utils/mdxUtils";
import { MDXProvider } from '@mdx-js/react';
import TableOfContents from './TableOfContents';

// Helper to create slug from text
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const components = {
  h1: props => {
    const id = props.id || createSlug(props.children);
    return <h1 id={id} className="text-4xl font-bold mb-6 mt-8 text-gray-800 dark:text-white scroll-mt-24" {...props} />;
  },
  h2: props => {
    const id = props.id || createSlug(props.children);
    return <h2 id={id} className="text-3xl font-bold mb-4 mt-6 text-gray-700 dark:text-white scroll-mt-24" {...props} />;
  },
  h3: props => {
    const id = props.id || createSlug(props.children);
    return <h3 id={id} className="text-2xl font-bold mb-3 mt-5 text-gray-600 dark:text-white scroll-mt-24" {...props} />;
  },
  h4: props => <h4 className="text-xl font-bold mb-3 mt-4 text-gray-600 dark:text-white" {...props} />,
  p: props => <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />,
  a: props => <a className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline" {...props} />,
  ul: props => <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300" {...props} />,
  ol: props => <ol className="list-decimal pl-5 mb-6 text-gray-700 dark:text-gray-300" {...props} />,
  li: props => <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />,
  code: props => <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-800 dark:text-gray-100 font-mono text-sm" {...props} />,
  pre: props => <pre className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg mb-6 overflow-x-auto border border-gray-200 dark:border-gray-800" {...props} />,
  img: props => (
    <img
      {...props}
      className="w-full rounded-lg my-4"
      loading="lazy"
    />
  )
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    getPostBySlug(slug)
      .then(postData => {
        setPost(postData);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [slug]);

  // Extract headings after content loads
  useEffect(() => {
    if (!loading && post) {
      // Wait for DOM to update
      setTimeout(() => {
        const headingElements = document.querySelectorAll('article h1, article h2, article h3');
        const extractedHeadings = Array.from(headingElements).map((heading) => {
          const level = parseInt(heading.tagName.charAt(1));
          const text = heading.textContent;
          const id = heading.id || createSlug(text);
          
          // Ensure the heading has an ID
          if (!heading.id) {
            heading.id = id;
          }
          
          return { id, text, level };
        });
        setHeadings(extractedHeadings);

        // Handle initial hash navigation
        if (window.location.hash) {
          setTimeout(() => {
            const id = window.location.hash.slice(1);
            const element = document.getElementById(id);
            if (element) {
              const yOffset = -80; // Account for fixed navbar
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 200);
        }
      }, 100);
    }
  }, [loading, post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <h1>Blog post not found</h1>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="relative flex mx-auto max-w-[1920px]">
        {/* Table of Contents */}
        <TableOfContents headings={headings} />
        
        {/* Main Content Container */}
        <div className="flex-1 flex justify-center min-w-0">
          {/* Content with max width and padding */}
          <div className="w-full max-w-4xl py-8 px-6 sm:px-8 lg:px-12 lg:py-16">
            <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img className="mr-4 w-16 h-16 rounded-full" src={post.author.image} alt="Author Image" loading="lazy" width={64} height={64} />
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{post.author.name}</a>
                  <p className="text-base text-gray-500 dark:text-gray-400">{post.author.title}</p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>{post.date}</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{post.title}</h1>
            <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-6">{post.description}</h4>
            {post.imgSrc && (
              <img 
                src={post.imgSrc} 
                alt={post.imgAlt || post.title} 
                className="w-full rounded-lg mb-8 shadow-lg"
                loading="lazy"
              />
            )}
          </header>
          <div className="mt-8 prose prose-lg prose-blue max-w-none dark:prose-invert prose-headings:dark:text-white prose-p:dark:text-gray-300 prose-strong:dark:text-white prose-a:dark:text-blue-400 prose-code:dark:text-gray-100 prose-pre:dark:bg-gray-950 prose-pre:dark:text-gray-100 prose-ol:dark:text-gray-300 prose-ul:dark:text-gray-300">
            <MDXProvider components={components}>
              <post.Content />
            </MDXProvider>
          </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
