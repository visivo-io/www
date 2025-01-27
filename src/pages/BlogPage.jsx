import BlogPost from '../components/blog/BlogPost';

const BlogPage = () => {
  const blogData = {
    author: {
      name: "Jese Leos",
      title: "Graphic Designer, educator & CEO Flowbite",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
    },
    date: {
      iso: "2022-02-08",
      formatted: "February 8th, 2022",
      display: "Feb. 8, 2022"
    },
    title: "Best practices for successful prototypes",
    content: "Your blog content here...",
    comments: [],
    relatedArticles: [
      {
        title: "Our first office",
        excerpt: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
        readTime: "2 minutes",
        url: "#"
      },
      // ... more articles
    ]
  };

  return <BlogPost post={blogData} />;
};

export default BlogPage; 