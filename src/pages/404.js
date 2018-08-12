import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'starter/Layout';
import Article from 'starter/Article';
import Heading from 'starter/Heading';
import Bodytext from 'starter/Bodytext';
import Seo from 'starter/Seo';

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
      <Seo />
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
