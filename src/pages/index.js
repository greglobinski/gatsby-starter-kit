import React from 'react';
import { graphql } from 'gatsby';

import Article from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Article';
import Bodytext from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Bodytext';
import Footer from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Footer';
import Seo from '../../../../mynpms/react-website-themes/packages/side-blog/src/components/Seo';
import ContextConsumer from '../../../../mynpms/react-website-themes/packages/side-blog/src/store/Context';

import config from 'content/meta/config';

const IndexPage = props => {
  const {
    data: {
      hero: { html: heroHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    location,
  } = props;

  const { siteUrl, siteLanguage, siteTitle, siteDescription } = config;

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
            <Bodytext html={heroHTML} />
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
