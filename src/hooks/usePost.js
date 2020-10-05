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
            image {
              childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }

                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
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
    image: post.frontmatter.image,
  }));
};

export default usePost;