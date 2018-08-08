import React from 'react';
import { graphql } from 'gatsby';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Footer,
  Header,
  Branding,
  Menu,
  Article,
  Heading,
  Bodytext,
  Seo,
  layout,
  footer,
  header,
  branding,
  menu,
  article,
  heading,
  bodytext,
} from 'react-website-themes';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
      welcome: {
        html: welcomeHTML,
        frontmatter: { title: welcomeTitle },
      },
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
        <Heading themeStyle={heading} title={welcomeTitle} />
        <Bodytext themeStyle={bodytext} html={welcomeHTML} />
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

export default IndexPage;

export const query = graphql`
  query {
    welcome: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/welcome/" }
    ) {
      html
      frontmatter {
        title
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
