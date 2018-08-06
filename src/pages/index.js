import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'starterComps/Layout';
import Article from 'starterComps/Article';
import Bodytext from 'starterComps/Bodytext';

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
