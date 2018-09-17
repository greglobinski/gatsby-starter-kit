const path = require('path');
const Promise = require('bluebird');
const { createFilePath } = require(`gatsby-source-filesystem`);

const SLUG_SEPARATOR = '___';

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

    let slug;
    let prefix;

    if (separatorExists) {
      const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
      const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
      slug =
        separatorPosition === 1
          ? null
          : `/${filePath.substring(slugBeginning)}`;
      prefix = filePath.substring(1, separatorPosition);
    } else {
      slug = filePath;
      prefix = '';
    }

    if (source !== 'parts') {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: prefix,
    });
    createNodeField({
      node,
      name: `source`,
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/PostTemplate.js');
    const pageTemplate = path.resolve('./src/templates/PageTemplate.js');

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            filter: { fields: { slug: { ne: null } } }
            sort: { fields: [fields___prefix], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                excerpt(pruneLength: 220)
                fields {
                  slug
                  prefix
                  source
                }
                frontmatter {
                  title
                  categories
                }
                timeToRead
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        /* Create Posts */
        const posts = items.filter(item => item.node.fields.source === 'posts');
        posts.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          //const identifier = node.fields.identifier;
          const next = index === 0 ? undefined : posts[index - 1].node;
          const prev =
            index === posts.length - 1 ? undefined : posts[index + 1].node;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
            },
          });
        });

        /* Create Pages */
        const pages = items.filter(item => item.node.fields.source === 'pages');
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source,
            },
          });
        });
      })
    );
  });
};
