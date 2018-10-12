import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'starter/Layout';
import Article from 'starter/Article';
import Bodytext from 'starter/Bodytext';
import Heading from 'starter/Heading';
import Seo from 'starter/Seo';

const IndexPage = props => {
  const {
    data: {
      welcome: {
        html: welcomeHTML,
        frontmatter: { title: welcomeTitle },
      },
    },
  } = props;

  return (
    <Layout>
      <Article>
        <Heading title={welcomeTitle} />
        <Bodytext html={welcomeHTML} />
      </Article>
      <Seo />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    welcome: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/welcome/" }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`;
