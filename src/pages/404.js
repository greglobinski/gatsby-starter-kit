import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'starterComponents/Layout';
import Article from 'starterComponents/Article';
import Heading from 'starterComponents/Heading';
import Bodytext from 'starterComponents/Bodytext';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
    },
  } = props;

  return (
    <Layout>
      <Article>
        <Heading title="NOT FOUND" />
        <Bodytext html={notFoundHTML} />
      </Article>
    </Layout>
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
  }
`;
