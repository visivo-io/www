const BlogComments = ({ comments }) => {
  return (
    <section className="not-format">
      <div className="mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion ({comments?.length || 0})
        </h2>
      </div>
      {comments?.map((comment, index) => (
        <article key={index} className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 font-semibold text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src={comment.author.avatar}
                  alt={comment.author.name}
                />
                {comment.author.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime={comment.date.iso} title={comment.date.formatted}>
                  {comment.date.display}
                </time>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            {comment.content}
          </p>
        </article>
      ))}
    </section>
  );
};

export default BlogComments; 