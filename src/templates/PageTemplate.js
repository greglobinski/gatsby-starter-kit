import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Article from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Article';
import Bodytext from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Bodytext';
import Footer from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Footer';
import Heading from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Heading';
import Seo from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Seo';

import config from 'content/meta/config';

const PageTemplate = props => {
  const {
    data: {
      page: {
        html: pageHTML,
        frontmatter: { title },
        fields: { slug },
        excerpt,
      },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { siteUrl, siteLanguage, siteTitlePostfix } = config;

  return (
    <React.Fragment>
      <Article>
        <Heading title={title} />
        <Bodytext html={pageHTML} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
      />
    </React.Fragment>
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
      excerpt
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
