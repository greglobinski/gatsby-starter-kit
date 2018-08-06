import React from 'react';
import { graphql } from 'gatsby';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Article,
  Bodytext,
  Heading,
  Seo,
  layout,
  article,
  heading,
  bodytext,
} from 'gatsby-starter-kit-themes/dist/default';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

import { themed } from 'gatsby-starter-kit-themes/dist/';

const LayoutThemed = themed({ themeStyle: layout })(Layout);
const ArticleThemed = themed({ themeStyle: article })(Article);
const BodytextThemed = themed({ themeStyle: bodytext })(Bodytext);
const HeadingThemed = themed({ themeStyle: heading })(Heading);

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
    <LayoutThemed
      footerLinks={footerLinksHTML}
      copyrightNote={copyrightNoteHTML}
      headerTitle={headerTitle}
      headerSubTitle={headerSubTitle}
      menu={menu}
    >
      <ArticleThemed>
        <HeadingThemed title="NOT FOUND" />
        <BodytextThemed html={notFoundHTML} />
      </ArticleThemed>
      <Seo />
    </LayoutThemed>
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
