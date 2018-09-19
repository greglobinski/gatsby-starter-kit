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
        frontmatter: { title, preTitle, subTitle },
      },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    location,
  } = props;

  const {
    siteUrl,
    siteLanguage,
    siteTitle,
    siteDescription,
    siteImage,
  } = config;

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
            <Heading special={true}>
              <img src={logo} alt={`${title} ${subTitle}`} />
              <h1>
                <small>{preTitle}</small>
                {title}
                <span>{subTitle}</span>
              </h1>
            </Heading>
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
        image={siteImage}
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
        preTitle
        subTitle
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
