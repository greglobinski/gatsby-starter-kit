import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'starterComps/Layout';
import Article from 'starterComps/Article';
import Heading from 'starterComps/Heading';
import Bodytext from 'starterComps/Bodytext';

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
