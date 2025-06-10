import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogArticleCard = ({ slug, imgSrc, imgAlt, tag, title, description, authorImg, authorName, date, readTime, external_link }) => {
  const [imageError, setImageError] = useState(false);

  const CardLink = ({ children }) => {
    if (external_link) {
      return <a href={external_link} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <Link to={`/blog/${slug}`}>{children}</Link>;
  };

  return (
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <CardLink>
        {imgSrc && !imageError ? (
          <div className="mb-5 rounded-lg aspect-[716/384] overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src={imgSrc} 
              alt={imgAlt}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="mb-5 rounded-lg aspect-[716/384] bg-gray-200 dark:bg-gray-700 animate-pulse" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </CardLink>
      <div className="w-fit">
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
          {tag}
        </span>
      </div>
      <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <CardLink>{title}</CardLink>
      </h2>
      <div className="mb-4 h-[4.5rem]">
        <p className="font-light text-gray-500 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10 rounded-full" src={authorImg} alt={`${authorName} avatar`} />
          <div className="font-medium dark:text-white">
            <div>{authorName}</div>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {date} · {readTime}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogArticleCard;