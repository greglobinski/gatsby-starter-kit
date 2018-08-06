import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'starterComponents/Layout';
import Article from 'starterComponents/Article';
import Bodytext from 'starterComponents/Bodytext';
import Seo from 'starterComponents/Seo';

const IndexPage = props => {
  const {
    data: {
      welcome: { html: welcomeHTML },
    },
  } = props;

  return (
    <Layout>
      <Article>
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
    }
  }
`;
