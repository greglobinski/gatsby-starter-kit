import React from 'react';
import { graphql } from 'gatsby';

import '@react-website-themes/diary/styles/variables';
import '@react-website-themes/diary/styles/global';

import Article from '@react-website-themes/diary/components/Article';
import Bodytext from '@react-website-themes/diary/components/Bodytext';
import Branding from '@react-website-themes/diary/components/Branding';
import Footer from '@react-website-themes/diary/components/Footer';
import Header from '@react-website-themes/diary/components/Header';
import Heading from '@react-website-themes/diary/components/Heading';
import Layout from '@react-website-themes/diary/components/Layout';
import Menu from '@react-website-themes/diary/components/Menu';
import Seo from '@react-website-themes/diary/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import logo from 'content/images/logo.png';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title="NOT FOUND" />
        <Bodytext html={notFoundHTML} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/notFound/" }
    ) {
      html
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
