import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogComments from './BlogComments';
import RelatedArticles from './RelatedArticles';

const BlogPost = ({ post }) => {
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <BlogHeader 
              author={post.author}
              date={post.date}
              title={post.title}
            />
            <BlogContent content={post.content} />
            <BlogComments comments={post.comments} />
          </article>
        </div>
      </main>
      <RelatedArticles articles={post.relatedArticles} />
    </>
  );
};

export default BlogPost; 