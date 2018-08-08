import React from 'react';
import { graphql, Link } from 'gatsby';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Footer,
  Header,
  Branding,
  Menu,
  Article,
  Blog,
  Seo,
  layout,
  footer,
  header,
  branding,
  menu,
  article,
  blog,
} from '../../../../mynpms/react-website-themes/src/default';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

const BlogPage = props => {
  const {
    data: {
      posts: { edges },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const posts = edges.map(edge => edge.node);

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
        <Blog
          themeStyle={blog}
          items={posts}
          author={'greg'}
          metaIcons={metaIcons}
        />
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

export default BlogPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
            prefix
            identifier
          }
          frontmatter {
            title
            categories
          }
        }
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
