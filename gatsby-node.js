exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug 
          }
        }
      }
    }
  `);

  // console.log(result)

  if (result.error ) {
    reporter.panic('failed to create page',result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/template/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
}