import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../starter/Layout';
import Article from '../starter/Article';
import Bodytext from '../starter/Bodytext';
import Heading from '../starter/Heading';
import Header from '../starter/Header';
import Footer from '../starter/Footer';

import config from '../content/meta/config';
import menu from '../content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      welcome: {
        html: welcomeHTML,
        frontmatter: { title: welcomeTitle },
      },
    },
  } = props;

  const { headerTitle, headerSubTitle } = config;

  return (
    <Layout>
      <Header title={headerTitle} subTitle={headerSubTitle} menuItems={menu} />
      <main>
        <Article>
          <Heading title={welcomeTitle} />
          <Bodytext html={welcomeHTML} />
        </Article>
      </main>
      <Footer />
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
