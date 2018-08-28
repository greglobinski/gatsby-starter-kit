import React from 'react';
import { graphql } from 'gatsby';
import dayjs from 'dayjs';

import '../../../../mynpms/react-website-themes/packages/diary/src/styles/variables';
import '../../../../mynpms/react-website-themes/packages/diary/src/styles/global';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import ArrowIcon from 'react-feather/dist/icons/arrow-right';
import ClockIcon from 'react-feather/dist/icons/clock';

import Article from '../../../../mynpms/react-website-themes/packages/diary/src/components/Article';
import Branding from '../../../../mynpms/react-website-themes/packages/diary/src/components/Branding';
import Footer from '../../../../mynpms/react-website-themes/packages/diary/src/components/Footer';
import Header from '../../../../mynpms/react-website-themes/packages/diary/src/components/Header';
import Menu from '../../../../mynpms/react-website-themes/packages/diary/src/components/Menu';
import Blog from '../../../../mynpms/react-website-themes/packages/diary/src/components/Blog';
import Layout from '../../../../mynpms/react-website-themes/packages/diary/src/components/Layout';
import Seo from '../../../../mynpms/react-website-themes/packages/diary/src/components/Seo';

import config from 'content/meta/config';
import logo from 'content/images/logo.png';
import menuItems from 'content/meta/menu';

const blogIcons = {
  post: CalendarIcon,
  arrow: ArrowIcon,
  time: ClockIcon,
};

class IndexPage extends React.Component {
  state = {
    lastVisit: null,
  };

  componentDidMount() {
    if (typeof localStorage !== 'undefined') {
      const lastVisit = localStorage.getItem('lastVisit');
      const todayDate = dayjs().format('YYYY-MM-DD');

      if (!lastVisit) {
        localStorage.setItem('lastVisit', todayDate);
        this.setState({ lastVisit: todayDate });
      } else {
        if (dayjs(lastVisit).diff(dayjs(todayDate)) > 0) {
          localStorage.setItem('lastVisit', todayDate);
          this.setState({ lastVisit: todayDate });
        } else {
          this.setState({ lastVisit: lastVisit });
        }
      }

      //console.log(localStorage.getItem('lastVisit'));
    }
  }

  render() {
    const { lastVisit } = this.state;

    const {
      data: {
        posts: { edges: postEdges },
        quotes: { edges: quoteEdges },
        footerLinks: { html: footerLinksHTML },
        copyright: { html: copyrightHTML },
      },
    } = this.props;

    const posts = postEdges.map(edge => {
      if (!/--/.test(edge.node.fields.prefix)) {
        edge.node.fields.prefix = edge.node.fields.prefix + '--00-00';
      }
      return edge.node;
    });
    const quotes = quoteEdges.map(edge => {
      if (!/--/.test(edge.node.fields.prefix)) {
        edge.node.fields.prefix = edge.node.fields.prefix + '--00-00';
      }
      return edge.node;
    });

    const items = [...posts, ...quotes];

    items.sort((a, b) => {
      return a.fields.prefix < b.fields.prefix ? 1 : -1;
    });

    const {
      headerTitle,
      headerSubTitle,
      siteUrl,
      siteTitle,
      siteDescription,
      siteLanguage,
      timeOffset,
    } = config;

    return (
      <Layout>
        <Header>
          <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
          <Menu items={menuItems} />
        </Header>
        <Article>
          <Blog
            items={items}
            author={'greg'}
            icons={blogIcons}
            lastVisit={lastVisit}
            timeOffset={timeOffset}
          />
        </Article>
        <Footer links={footerLinksHTML} copyright={copyrightHTML} />
        <Seo
          url={siteUrl}
          language={siteLanguage}
          title={siteTitle}
          description={siteDescription}
        />
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
            prefix
            source
          }
          frontmatter {
            title
            categories
          }
          timeToRead
        }
      }
    }
    quotes: allMarkdownRemark(
      filter: { fields: { source: { eq: "quotes" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            cite
            author
          }
          fields {
            prefix
            source
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
