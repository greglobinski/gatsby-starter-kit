import React from 'react';
import { graphql } from 'gatsby';

import Article from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Article';
import Bodytext from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Bodytext';
import Footer from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Footer';
import Seo from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Seo';

import config from 'content/meta/config';

const IndexPage = props => {
  const {
    data: {
      hero: { html: heroHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const { siteUrl, siteLanguage, siteTitle, siteDescription, city } = config;

  return (
    <React.Fragment>
      <Article>
        <Bodytext html={heroHTML} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </React.Fragment>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
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
