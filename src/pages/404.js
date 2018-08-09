import React from 'react';
import { graphql } from 'gatsby';

import Article from 'react-website-themes/dist/default/components/Article';
import Bodytext from 'react-website-themes/dist/default/components/Bodytext';
import Branding from 'react-website-themes/dist/default/components/Branding';
import Footer from 'react-website-themes/dist/default/components/Footer';
import Header from 'react-website-themes/dist/default/components/Header';
import Heading from 'react-website-themes/dist/default/components/Heading';
import Layout from 'react-website-themes/dist/default/components/Layout';
import Menu from 'react-website-themes/dist/default/components/Menu';
import Seo from 'react-website-themes/dist/default/components/Seo';

import 'react-website-themes/dist/default/styles/global';
import article from 'react-website-themes/dist/default/styles/article';
import bodytext from 'react-website-themes/dist/default/styles/bodytext';
import branding from 'react-website-themes/dist/default/styles/branding';
import footer from 'react-website-themes/dist/default/styles/footer';
import header from 'react-website-themes/dist/default/styles/header';
import heading from 'react-website-themes/dist/default/styles/heading';
import layout from 'react-website-themes/dist/default/styles/layout';
import menu from 'react-website-themes/dist/default/styles/menu';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout themeStyle={layout} menu={menu}>
      <Header themeStyle={header} menu={menu}>
        <Branding
          themeStyle={branding}
          title={headerTitle}
          subTitle={headerSubTitle}
        />
        <Menu themeStyle={menu} items={menuItems} />
      </Header>
      <Article themeStyle={article}>
        <Heading themeStyle={heading} title="NOT FOUND" />
        <Bodytext themeStyle={bodytext} html={notFoundHTML} />
      </Article>
      <Footer
        themeStyle={footer}
        links={footerLinksHTML}
        copyright={copyrightHTML}
      />
      <Seo config={config} />
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
