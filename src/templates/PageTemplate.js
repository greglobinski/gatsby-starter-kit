import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '@react-website-themes/clean-diary/styles/variables';
import '@react-website-themes/clean-diary/styles/global';

import Article from '@react-website-themes/clean-diary/components/Article';
import Bodytext from '@react-website-themes/clean-diary/components/Bodytext';
import Branding from '@react-website-themes/clean-diary/components/Branding';
import Footer from '@react-website-themes/clean-diary/components/Footer';
import Header from '@react-website-themes/clean-diary/components/Header';
import Heading from '@react-website-themes/clean-diary/components/Heading';
import Layout from '@react-website-themes/clean-diary/components/Layout';
import Menu from '@react-website-themes/clean-diary/components/Menu';
import Seo from '@react-website-themes/clean-diary/components/Seo';

import ArrowUpIcon from 'react-feather/dist/icons/arrow-up';
import CalendarIcon from 'react-feather/dist/icons/calendar';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import logo from 'content/images/logo.png';

const actionIcons = {
  toTop: ArrowUpIcon,
};

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
    siteLanguage,
    siteTitlePostfix,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
        <Menu items={menuItems} actionIcons={actionIcons} />
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
