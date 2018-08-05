import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'base/Layout';
import Article from 'base/Article';
import Heading from 'base/Heading';
import Bodytext from 'base/Bodytext';

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
