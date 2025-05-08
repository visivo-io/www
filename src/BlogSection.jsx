import React, { useState, useEffect } from "react";
import BlogArticleCard from "./components/BlogArticleCard";
import { getAllPosts } from "./utils/mdxUtils";

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const externalArticles = [
    {
      title: "Visualizing GitHub Data",
      description: "Quickly gain insights into your Github Repositories with Visivo",
      tag: "Dashboard",
      imgSrc: "/images/visivo_github.webp",
      imgAlt: "Visivo Github",
      authorName: "Tim Overly",
      authorImg: "/images/tim.webp",
      date: "Sept 28, 2023",
      readTime: "4 min",
      external_link: "https://medium.com/@tim_visivo/quickly-create-a-github-dashboard-using-visivo-10371f1dfea1"
    }, 
    {
      title: "RWX Chooses Visivo",
      description: "Visivo is the most dev friendly and secure analytics",
      tag: "Case Study",
      imgSrc: "/images/rwx_visivo.webp",
      imgAlt: "RWX Chooses Visivo",
      authorName: "Dan Manges",
      authorImg: "/images/dan.webp",
      date: "April 23, 2024",
      readTime: "5 min",
      external_link: "https://www.rwx.com/blog/visivo-analytics"
    },
    {
      title: "Visualizing Pytest Results",
      description: "Step by step guide for leveraging Pytest, Fivetran & Visivo to quickly create monitoring for your CI/CD.",
      tag: "Dashboard",
      imgSrc: "/images/pytest_results.webp",
      imgAlt: "Visivo Pytest",
      authorName: "Jared Jesionek",
      authorImg: "/images/Jared.webp",
      date: "Sept 25, 2023",
      readTime: "6 min",
      external_link: "https://medium.com/dev-genius/visualizing-pytest-results-with-the-modern-data-stack-29daeab99b66"
    },
    {
      title: "The World Still Runs on Spreadsheets",
      description: "Why spreadsheets remain so popular, the hidden costs of constantly importing CSVs, and how we can make dashboards “first-class citizens” through BI-as-code",
      tag: "Community",
      imgSrc: "/images/spreadsheet-world-domination.png",
      imgAlt: "Spreadsheet World Domination",
      authorName: "Kristian Sigston",
      authorImg: "/images/kristian.jpeg",
      date: "Feb 6, 2025",
      readTime: "5 min",
      external_link: "https://kristiansigston.medium.com/why-the-world-is-still-happily-running-on-spreadsheets-6ee1b86ff67f"
    }
  ];
  
  useEffect(() => {
    getAllPosts()
      .then(posts => {
        // Combine posts and external articles
        const allArticles = [...posts, ...externalArticles];
        
        // Sort by date in descending order (most recent first)
        const sortedArticles = allArticles.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

        setArticles(sortedArticles);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading posts:', error);
        setLoading(false);
      });
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = (
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesTag = !selectedTag || article.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const uniqueTags = [...new Set(articles.map(article => article.tag))];

  if (loading) {
    return <div>Loading...</div>; // You might want to add a proper loading spinner here
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-8">
          <h4 className="mb-4 text-1xl tracking-tight font-extrabold text-gray-900 dark:text-white">Blog</h4>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our vision for the future of analytics, thoughts on the current state of data. 
          </p>
        </div>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="w-full sm:w-96 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="w-full sm:w-48 p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Tags</option>
              {uniqueTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <BlogArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
