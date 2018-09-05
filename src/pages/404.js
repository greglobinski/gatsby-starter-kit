import React from 'react';
import { graphql } from 'gatsby';

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
