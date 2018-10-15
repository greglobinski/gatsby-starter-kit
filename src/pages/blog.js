import React from 'react';
import { graphql } from 'gatsby';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

import Article from '@react-website-themes/default/components/Article';
import Branding from '@react-website-themes/default/components/Branding';
import Footer from '@react-website-themes/default/components/Footer';
import Header from '@react-website-themes/default/components/Header';
import Blog from '@react-website-themes/default/components/Blog';
import Layout from '@react-website-themes/default/components/Layout';
import Menu from '@react-website-themes/default/components/Menu';
import Seo from '@react-website-themes/default/components/Seo';

import config from '../content/meta/config';
import menu from '../content/meta/menu';

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

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
    siteImage,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menu} />
      </Header>
      <Article>
        <Blog items={posts} author={'greg'} metaIcons={metaIcons} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
        image={siteImage}
      />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
            prefix
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
