import React from 'react';
import { graphql } from 'gatsby';

import {
  Layout,
  Article,
  Bodytext,
  Seo,
} from 'gatsby-starter-kit-themes/dist/default';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      welcome: { html: welcomeHTML },
      footerLinks: { html: footerLinksHTML },
      copyrightNote: { html: copyrightNoteHTML },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout
      footerLinks={footerLinksHTML}
      copyrightNote={copyrightNoteHTML}
      headerTitle={headerTitle}
      headerSubTitle={headerSubTitle}
      menu={menu}
    >
      <Article>
        <Bodytext html={welcomeHTML} />
      </Article>
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
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyrightNote: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyrightNote/" }
    ) {
      html
    }
  }
`;
