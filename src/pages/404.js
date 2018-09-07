import React from 'react';
import { graphql } from 'gatsby';

import Article from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Article';
import Bodytext from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Bodytext';
import Branding from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Branding';
import Footer from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Footer';
import Header from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Header';
import Heading from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Heading';
import Menu from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Menu';
import Seo from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import logo from 'content/images/logo.png';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  return (
    <React.Fragment>
      <Article>
        <Heading title="NOT FOUND" />
        <Bodytext html={notFoundHTML} />
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
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
