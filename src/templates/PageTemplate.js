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
} from '../../../../mynpms/react-website-themes/src/default';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const PageTemplate = props => {
  const {
    data: {
      page,
      page: {
        html: pageHTML,
        frontmatter: { title },
        fields: { slug },
      },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
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
        <Heading themeStyle={heading} title={title} />
        <Bodytext themeStyle={bodytext} html={pageHTML} />
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

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
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
