import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

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
} from '../../../gatsby-starter-kit-themes/dist/default';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const PostTemplate = props => {
  const {
    data: {
      post,
      post: {
        html: postHTML,
        frontmatter: { title },
        fields: { slug },
      },
      author: { html: authorHTML },
      footerLinks: { html: footerLinksHTML },
      copyrightNote: { html: copyrightNoteHTML },
    },
    pageContext: { next, prev },
  } = props;

  const { headerTitle, headerSubTitle, siteUrl } = config;

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
        <Heading themeStyle={heading} title={title} />
        <Bodytext themeStyle={bodytext} html={postHTML} />
      </Article>
      <Footer
        themeStyle={footer}
        links={footerLinksHTML}
        copyright={copyrightNoteHTML}
      />
      <Seo config={config} />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    author: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/author/" }
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
