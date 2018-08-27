import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TagIcon from 'react-feather/dist/icons/tag';

import 'prismjs/themes/prism-okaidia.css';
import '../../../../mynpms/react-website-themes/packages/diary/src/styles/variables';
import '../../../../mynpms/react-website-themes/packages/diary/src/styles/global';

import Article from '../../../../mynpms/react-website-themes/packages/diary/src/components/Article';
import Branding from '../../../../mynpms/react-website-themes/packages/diary/src/components/Branding';
import Footer from '../../../../mynpms/react-website-themes/packages/diary/src/components/Footer';
import Header from '../../../../mynpms/react-website-themes/packages/diary/src/components/Header';
import Heading from '../../../../mynpms/react-website-themes/packages/diary/src/components/Heading';
import Layout from '../../../../mynpms/react-website-themes/packages/diary/src/components/Layout';
import List from '../../../../mynpms/react-website-themes/packages/diary/src/components/List';
import Menu from '../../../../mynpms/react-website-themes/packages/diary/src/components/Menu';
import Seo from '../../../../mynpms/react-website-themes/packages/diary/src/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const PageTemplate = props => {
  const {
    pageContext: { category },
    data: {
      posts: { totalCount, edges },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const items = edges.map(edge => edge.node);

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteDescription,
    siteLanguage,
    siteTitlePostfix,
  } = config;

  return (
    <Layout>
      <Header>
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading>
          <span>
            Posts in category <TagIcon />
          </span>
          <h1>{category}</h1>
          <p className="meta">
            There {totalCount > 1 ? 'are' : 'is'} <strong>{totalCount}</strong>{' '}
            post
            {totalCount > 1 ? 's' : ''} in the category.
          </p>
        </Heading>
        <List items={items} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={`${siteUrl}/categories/${category}/`}
        language={siteLanguage}
        title={`Posts in category: ${category}${siteTitlePostfix}`}
        description={siteDescription}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query CategoryTemplateQuery($category: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            prefix
          }
          excerpt
          timeToRead
          frontmatter {
            title
            categories
          }
        }
      }
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
