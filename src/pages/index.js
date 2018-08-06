import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'starterComponents/Layout';
import Article from 'starterComponents/Article';
import Bodytext from 'starterComponents/Bodytext';
import Heading from 'starterComponents/Heading';

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
