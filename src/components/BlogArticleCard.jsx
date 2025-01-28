import React from "react";
import { Link } from "react-router-dom";

const BlogArticleCard = ({ slug, imgSrc, imgAlt, tag, title, description, authorImg, authorName, date, readTime }) => {
  return (
    <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/blog/${slug}`}>
        <img className="mb-5 rounded-lg" src={imgSrc} alt={imgAlt} />
      </Link>
      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
        {tag}
      </span>
      <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p>
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