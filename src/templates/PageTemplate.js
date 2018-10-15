import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '@react-website-themes/default/styles/variables';
import '@react-website-themes/default/styles/global';

import Article from '@react-website-themes/default/components/Article';
import Bodytext from '@react-website-themes/default/components/Bodytext';
import Branding from '@react-website-themes/default/components/Branding';
import Footer from '@react-website-themes/default/components/Footer';
import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Menu from '@react-website-themes/default/components/Menu';
import Seo from '@react-website-themes/default/components/Seo';

import config from '../content/meta/config';
import menu from '../content/meta/menu';

const PageTemplate = props => {
  const {
    data: {
      page: {
        html: pageHTML,
        frontmatter: { title },
        fields: { slug },
        excerpt,
      },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteLanguage,
    siteTitlePostfix,
    siteImage,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menu} />
      </Header>
      <Article>
        <Heading title={title} />
        <Bodytext html={pageHTML} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
        image={siteImage}
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
  query PageTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
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
