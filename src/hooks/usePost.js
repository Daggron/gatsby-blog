import { graphql, useStaticQuery } from 'gatsby';

const usePost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            Author
            slug
            title
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    Author: post.frontmatter.Author,
    excerpt: post.excerpt,
  }));
};

export default usePost;