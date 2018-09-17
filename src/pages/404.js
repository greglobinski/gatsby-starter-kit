import React from 'react';
import { graphql } from 'gatsby';

import Article from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Article';
import Bodytext from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Bodytext';
import Footer from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Footer';
import Heading from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Heading';
import Seo from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Seo';
import ContextConsumer from '../../../../mynpms/react-website-themes/packages/side-blog/src/store/Context';

import config from 'content/meta/config';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    location,
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <React.Fragment>
      <ContextConsumer>
        {({ data, set }) => (
          <Article
            location={location}
            articleRendered={data.articleRendered}
            updateArticleRendered={val =>
              set({
                articleRendered: val,
              })
            }
          >
            <Heading title="NOT FOUND" />
            <Bodytext html={notFoundHTML} />
          </Article>
        )}
      </ContextConsumer>
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
