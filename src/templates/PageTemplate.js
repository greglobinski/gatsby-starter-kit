import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '../../../../mynpms/react-website-themes/packages/diary/src/styles/variables';
import '../../../../mynpms/react-website-themes/packages/diary/src/styles/global';

import Article from '../../../../mynpms/react-website-themes/packages/diary/src/components/Article';
import Bodytext from '../../../../mynpms/react-website-themes/packages/diary/src/components/Bodytext';
import Branding from '../../../../mynpms/react-website-themes/packages/diary/src/components/Branding';
import Footer from '../../../../mynpms/react-website-themes/packages/diary/src/components/Footer';
import Header from '../../../../mynpms/react-website-themes/packages/diary/src/components/Header';
import Heading from '../../../../mynpms/react-website-themes/packages/diary/src/components/Heading';
import Layout from '../../../../mynpms/react-website-themes/packages/diary/src/components/Layout';
import Menu from '../../../../mynpms/react-website-themes/packages/diary/src/components/Menu';
import Seo from '../../../../mynpms/react-website-themes/packages/diary/src/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import logo from 'content/images/logo.png';

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
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
        <Menu items={menuItems} />
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
