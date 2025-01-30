import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../utils/mdxUtils";
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: props => <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white" {...props} />,
  h2: props => <h2 className="text-3xl font-bold mb-2 text-gray-700 dark:text-white" {...props} />,
  h3: props => <h3 className="text-2xl font-bold mb-2 text-gray-600 dark:text-white" {...props} />,
  h4: props => <h4 className="text-xl font-bold mb-2 text-gray-600 dark:text-white" {...props} />,
  p: props => <p className="mb-4 text-gray-700 dark:text-gray-300" {...props} />,
  a: props => <a className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300" {...props} />,
  ul: props => <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300" {...props} />,
  ol: props => <ol className="list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300" {...props} />,
  li: props => <li className="mb-2 text-gray-700 dark:text-gray-300" {...props} />,
  code: props => <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded text-gray-800 dark:text-white" {...props} />,
  pre: props => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 overflow-x-auto" {...props} />,
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <h1>Blog post not found</h1>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img className="mr-4 w-16 h-16 rounded-full" src={post.author.image} alt="Author Image" />
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
            <h4 className="text-xl text-gray-600 dark:text-white">{post.description}</h4>
          </header>
          <div className="mt-4 prose prose-blue max-w-none dark:prose-invert prose-headings:dark:text-white prose-p:dark:text-gray-400 prose-strong:dark:text-white prose-a:dark:text-blue-400 prose-code:dark:text-white prose-pre:dark:bg-gray-800 prose-pre:dark:text-gray-300 prose-ol:dark:text-gray-400 prose-ul:dark:text-gray-400">
            <MDXProvider components={components}>
              <post.Content />
            </MDXProvider>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
