import React from 'react';
import { graphql } from 'gatsby';

import {
  Layout,
  Article,
  Bodytext,
  Heading,
  Seo,
} from 'gatsby-starter-kit-themes/dist/default';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
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
        <Heading title="NOT FOUND" />
        <Bodytext html={notFoundHTML} />
      </Article>
      <Seo />
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
    copyrightNote: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyrightNote/" }
    ) {
      html
    }
  }
`;
