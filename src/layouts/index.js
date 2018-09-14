import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import '../../../../mynpms/react-website-themes/packages/side-nav/src/styles/variables';
import '../../../../mynpms/react-website-themes/packages/side-nav/src/styles/global';

import Layout from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Layout';
import Sidebar from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Sidebar';
import prefixToDateTimeString from '../../../../mynpms/react-website-themes/packages/side-nav/src/utils/prefixToDateTimeString';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import ListIcon from 'react-feather/dist/icons/list';
import SearchIcon from 'react-feather/dist/icons/search';
import TagIcon from 'react-feather/dist/icons/tag';
import FolderIcon from 'react-feather/dist/icons/folder';
import HomeIcon from 'react-feather/dist/icons/home';
import CloseIcon from 'react-feather/dist/icons/x';
import ArrowRightIcon from 'react-feather/dist/icons/arrow-right';

import config from 'content/meta/config';

const sidebarIcons = {
  calendar: CalendarIcon,
  category: FolderIcon,
  list: ListIcon,
  search: SearchIcon,
  tag: TagIcon,
  home: HomeIcon,
  close: CloseIcon,
  arrow: ArrowRightIcon,
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
                    tags
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
                fields: { slug, prefix },
                frontmatter: { title, categories, tags },
              },
            } = item;

            const date = prefixToDateTimeString(prefix);

            return { title, slug, date, categories, tags };
          });

          return (
            <Layout>
              <Sidebar
                posts={posts}
                title={headerTitle}
                subTitle={headerSubTitle}
                icons={sidebarIcons}
              />
              <main>{this.props.children}</main>
            </Layout>
          );
        }}
      />
    );
  }
}

export default LayoutWrapper;
