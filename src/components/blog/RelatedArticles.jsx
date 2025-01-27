const RelatedArticles = ({ articles }) => {
  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related articles
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {articles?.map((article, index) => (
            <article key={index} className="max-w-xs">
              <a href={article.url}>
                <img src={article.image} className="mb-5 rounded-lg" alt={article.title} />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href={article.url}>{article.title}</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                {article.excerpt}
              </p>
              <a href={article.url} className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Read in {article.readTime}
              </a>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RelatedArticles; 