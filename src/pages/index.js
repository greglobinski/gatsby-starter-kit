import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import Article from '@react-website-themes/side-blog/components/Article';
import Bodytext from '@react-website-themes/side-blog/components/Bodytext';
import Heading from '@react-website-themes/side-blog/components/Heading';
import Footer from '@react-website-themes/side-blog/components/Footer';
import Seo from '@react-website-themes/side-blog/components/Seo';
import ContextConsumer from '@react-website-themes/side-blog/store/Context';

import config from 'content/meta/config';
import logo from 'content/images/logo.png';

const logoStyle = css`
  margin: 20px auto;
  display: block;
`;

const IndexPage = props => {
  const {
    data: {
      home: {
        html: homeHTML,
        frontmatter: { title },
      },
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
            <img src={logo} alt={siteTitle} className={logoStyle} />
            <Heading title={title} home={true} />
            <Bodytext html={homeHTML} />
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
    home: markdownRemark(fileAbsolutePath: { regex: "/content/parts/home/" }) {
      html
      frontmatter {
        title
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
