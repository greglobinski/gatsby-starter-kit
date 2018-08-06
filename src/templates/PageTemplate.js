import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import config from 'content/meta/config';

import Layout from 'base/Layout';
import Page from 'base/Page';
import List from 'base/List';
import Seo from 'base/Seo';

import themed from 'utils/themed';

const PageThemed = themed({ theme: config.theme, style: 'page' })(Page);

const PageTemplate = props => {
  const {
    data: {
      page,
      page: {
        frontmatter: { title, categories },
        fields: { slug },
      },
      pages: { edges: rawItems },
    },
  } = props;

  const items = rawItems.map(item => item.node);

  const layoutStyle =
    categories && categories.includes('docs') ? 'layoutSidebar' : 'layout';

  const LayoutThemed = themed({
    theme: config.theme,
    style: layoutStyle,
  })(Layout);

  return (
    <LayoutThemed>
      <PageThemed page={page} />
      <Seo title={title} path={slug} />
    </LayoutThemed>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        categories
      }
    }
    pages: allMarkdownRemark(
      filter: { frontmatter: { categories: { in: ["docs"] } } }
      sort: { fields: [fields___prefix] }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
