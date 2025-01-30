const authors = {
    "Jese Leos": {
      title: "Graphic Designer, educator & CEO Flowbite",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    },
    "Roberta Casas": {
      title: "Another Person",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
    },
    "Sofia McGuire": {
      title: "Assistant to the GPT",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
    }
  };

export async function getPostBySlug(slug) {
  try {
    // Dynamic import of MDX files
    const post = await import(`../../posts/${slug}.mdx`);
    const { frontmatter, default: Content } = post;
    
    const authorInfo = authors[frontmatter.author] 

    return {
      title: frontmatter.title,
      Content, // Return the MDX component directly
      author: {
        name: frontmatter.author,
        title: authorInfo.title,
        image: authorInfo.image
      },
      date: frontmatter.date,
    };
  } catch (error) {
    console.error(`Error reading post file: ${error}`);
    return null;
  }
} 