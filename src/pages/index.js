import React from 'react';
import { graphql } from 'gatsby';

import Article from '@react-website-themes/side-blog/components/Article';
import Bodytext from '@react-website-themes/side-blog/components/Bodytext';
import Footer from '@react-website-themes/side-blog/components/Footer';
import Seo from '@react-website-themes/side-blog/components/Seo';
import ContextConsumer from '@react-website-themes/side-blog/store/Context';

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
