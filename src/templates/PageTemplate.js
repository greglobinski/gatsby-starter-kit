import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import Article from 'react-website-themes/dist/default/components/Article';
import Branding from 'react-website-themes/dist/default/components/Branding';
import Bodytext from 'react-website-themes/dist/default/components/Bodytext';
import Footer from 'react-website-themes/dist/default/components/Footer';
import Header from 'react-website-themes/dist/default/components/Header';
import Heading from 'react-website-themes/dist/default/components/Heading';
import Hero from 'react-website-themes/dist/default/components/Hero';
import Layout from 'react-website-themes/dist/default/components/Layout';
import Menu from 'react-website-themes/dist/default/components/Menu';
import Seo from 'react-website-themes/dist/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const PageTemplate = props => {
  const {
    data: {
      page,
      page: {
        html: pageHTML,
        frontmatter: { title },
        fields: { slug },
      },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title={title} />
        <Bodytext html={pageHTML} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo config={config} />
    </Layout>
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
