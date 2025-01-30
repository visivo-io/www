import React from "react";
import { Link } from "react-router-dom";

const BlogArticleCard = ({ slug, imgSrc, imgAlt, tag, title, description, authorImg, authorName, date, readTime, external_link }) => {
  const CardLink = ({ children }) => {
    if (external_link) {
      return <a href={external_link} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <Link to={`/blog/${slug}`}>{children}</Link>;
  };

  return (
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <CardLink>
        <img className="mb-5 rounded-lg" src={imgSrc} alt={imgAlt} />
      </CardLink>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
        {tag}
      </span>
      <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <CardLink>{title}</CardLink>
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-3 h-[4.5rem]">
        {description}
      </p>
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 rounded-full" src={authorImg} alt={`${authorName} avatar`} />
        <div className="font-medium dark:text-white">
          <div>{authorName}</div>
          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {date} · {readTime}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogArticleCard;