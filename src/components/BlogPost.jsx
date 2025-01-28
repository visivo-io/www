import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  // Simulate blog post data
  const blogPosts = {
    "our-first-office": {
      title: "Our First Office",
      content: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
      author: {
        name: "Jese Leos",
        title: "Graphic Designer, educator & CEO Flowbite",
      },
      date: "Aug 15, 2021",
    },
    "we-partnered-with-google": {
      title: "We Partnered with Google",
      content: "Learn about how we collaborated with Google to achieve amazing things.",
      author: "Roberta Casas",
      date: "Aug 15, 2021",
    },
    "our-first-react-project": {
      title: "Our First React Project",
      content: "A detailed overview of our first project using React.",
      author: "Sofia McGuire",
      date: "Aug 15, 2021",
    },
  };

  const post = blogPosts[slug];

  if (!post) {
    return <h1>Blog post not found</h1>;
  }

  return (
    // <article className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    //   <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{post.title}</h1>
    //   <p className="text-sm text-gray-500 dark:text-gray-400">
    //     {post.author} · {post.date}
    //   </p>
    //   <div className="mt-4 text-gray-700 dark:text-gray-300">{post.content}</div>

    // </article>


    
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"></img>
                        <div>
                            <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{post.author.name}</a>
                            <p class="text-base text-gray-500 dark:text-gray-400">{post.author.title}</p>
                            <p class="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="{post.author.name}">{post.author.name}</time></p>
                        </div>
                    </div>
                </address>
                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{post.title}</h1>
            </header>
            <div className="mt-4 text-gray-700 dark:text-gray-300">{post.content}</div>
            
        </article>
    
    



  );
};

export default BlogPost;
