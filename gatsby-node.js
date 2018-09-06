const _ = require('lodash');
const path = require('path');
const Promise = require('bluebird');
const { createFilePath } = require(`gatsby-source-filesystem`);

const SLUG_SEPARATOR = '___';
const ITEMS_PER_PAGE = 5;

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

    if (source !== 'parts' && source !== 'quotes') {
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

const dataForHomePage = {};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/PostTemplate.js');
    const pageTemplate = path.resolve('./src/templates/PageTemplate.js');
    const blogTemplate = path.resolve('./src/templates/BlogTemplate.js');
    const categoryTemplate = path.resolve(
      './src/templates/CategoryTemplate.js'
    );

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
          quotes: allMarkdownRemark(
            filter: { fields: { source: { eq: "quotes" } } }
          ) {
            edges {
              node {
                html
                frontmatter {
                  cite
                  author
                }
                fields {
                  prefix
                  source
                }
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
        const quotes = result.data.quotes.edges;

        const categorySet = new Set();

        /* Create Category list */
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { categories },
            },
          } = edge;

          if (categories) {
            categories.forEach(category => {
              categorySet.add(category);
            });
          }
        });

        /* Create Category Pages */
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          });
        });

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

        /* Create Blog pages*/

        const blogItems = [...posts, ...quotes];

        const unifiedPrefixBlogItems = blogItems.map(item => {
          if (!/--/.test(item.node.fields.prefix)) {
            item.node.fields.prefix = item.node.fields.prefix + '--00-00';
          }
          return item.node;
        });

        unifiedPrefixBlogItems.sort((a, b) => {
          return a.fields.prefix < b.fields.prefix ? 1 : -1;
        });

        const groupedBlogItems = unifiedPrefixBlogItems
          .map((item, index) => {
            return index % ITEMS_PER_PAGE === 0
              ? unifiedPrefixBlogItems.slice(index, index + ITEMS_PER_PAGE)
              : null;
          })
          .filter(item => item);

        groupedBlogItems.forEach((group, index) => {
          if (index === 0) {
            dataForHomePage.items = group;
            dataForHomePage.pageIndex = 0;
            dataForHomePage.numberOfPages = groupedBlogItems.length;
          }

          if (index > 0) {
            createPage({
              path: `/page-${index + 1}`,
              component: blogTemplate,
              context: {
                items: group,
                pageIndex: index,
                numberOfPages: groupedBlogItems.length,
              },
            });
          }
        });
      })
    );
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page);

    page.context.items = dataForHomePage.items;
    page.context.pageIndex = dataForHomePage.pageIndex;
    page.context.numberOfPages = dataForHomePage.numberOfPages;

    if (page.path === '/') {
      deletePage(oldPage);
      createPage(page);
    }
    resolve();
  });
};
