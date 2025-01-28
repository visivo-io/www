import React from "react";
import BlogArticleCard from "./components/BlogArticleCard";

const BlogSection = () => {
  const articles = [
    {
      slug: "our-first-office",
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png",
      imgAlt: "office laptop working",
      tag: "Article",
      title: "Our first office",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      authorImg: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      authorName: "Jese Leos",
      date: "Aug 15, 2021",
      readTime: "16 min read",
    },
    {
      slug: "we-partnered-with-google",
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png",
      imgAlt: "Google HQ",
      tag: "Article",
      title: "We partnered up with Google",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      authorImg: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      authorName: "Roberta Casas",
      date: "Aug 15, 2021",
      readTime: "16 min read",
    },
    {
      slug: "our-first-react-project",
      imgSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png",
      imgAlt: "office laptops",
      tag: "Article",
      title: "Our first project with React",
      description: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      authorImg: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      authorName: "Sofia McGuire",
      date: "Aug 15, 2021",
      readTime: "16 min read",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <BlogArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
