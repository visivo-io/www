const authors = {
    "Jared Jesionek": {
        title: "CEO & Co-founder of Visivo",
        image: "/images/Jared.webp"
    },
    "Tim Overly": {
        title: "CTO & Co-founder of Visivo",
        image: "/images/tim.webp"  
    },
    "Dan Manges": {
      title: "Co-Founder & CEO of RWX",
      image: "/images/dan.webp"
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
      slug: slug,
      tag: frontmatter.tag,
      imgSrc: frontmatter.imgSrc,
      imgAlt: frontmatter.imgAlt || "Blog Post Image",
      readTime: frontmatter.readTime || "4 min read", 
      description: frontmatter.description
    };
  } catch (error) {
    console.error(`Error reading post file: ${error}`);
    return null;
  }
}

export async function getAllPosts() {
  const posts = [];
  
  // Get all .mdx files from the posts directory
  const postFiles = import.meta.glob('../../posts/*.mdx');
  
  for (const path in postFiles) {
    // Extract slug from filename (remove path and extension)
    const slug = path.split('/').pop().replace('.mdx', '');
    
    try {
      const post = await getPostBySlug(slug);
      if (post) {
        posts.push({
          slug,
          imgSrc: post.imgSrc,
          imgAlt: post.imgAlt,
          tag: post.tag,
          title: post.title,
          description: post.description,
          authorImg: post.author.image,
          authorName: post.author.name,
          date: post.date,
          readTime: post.readTime
        });
      }
    } catch (error) {
      console.error(`Error loading post ${slug}:`, error);
    }
  }
  
  // Sort posts by date (most recent first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
} 