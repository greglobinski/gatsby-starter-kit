import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import '../../../../mynpms/react-website-themes/packages/side-nav/src/styles/variables';
import '../../../../mynpms/react-website-themes/packages/side-nav/src/styles/global';

import Layout from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Layout';
import Sidebar from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Sidebar';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import ListIcon from 'react-feather/dist/icons/list';
import SearchIcon from 'react-feather/dist/icons/search';
import TagIcon from 'react-feather/dist/icons/tag';
import FolderIcon from 'react-feather/dist/icons/folder';

import config from 'content/meta/config';

const sidebarIcons = {
  calendar: CalendarIcon,
  category: FolderIcon,
  list: ListIcon,
  search: SearchIcon,
  tag: TagIcon,
};

class LayoutWrapper extends React.Component {
  render() {
    const { headerTitle, headerSubTitle } = config;

    return (
      <StaticQuery
        query={graphql`
          query LayoutgQuery {
            allMarkdownRemark(
              filter: {
                fields: { slug: { ne: null }, source: { eq: "posts" } }
              }
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
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
          }
        `}
        render={data => {
          const {
            allMarkdownRemark: { edges: rawPosts },
          } = data;

          const posts = rawPosts.map(item => {
            const {
              node: {
                fields: { slug, prefix: date },
                frontmatter: { title, categories },
              },
            } = item;

            return { title, slug, date, categories };
          });

          return (
            <Layout>
              <main>{this.props.children}</main>
              <Sidebar
                posts={posts}
                title={headerTitle}
                subTitle={headerSubTitle}
                icons={sidebarIcons}
              />
            </Layout>
          );
        }}
      />
    );
  }
}

export default LayoutWrapper;
