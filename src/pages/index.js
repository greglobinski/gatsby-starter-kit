import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'base/Layout';
import Article from 'base/Article';
import Bodytext from 'base/Bodytext';

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
