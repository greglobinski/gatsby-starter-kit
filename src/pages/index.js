import React from 'react';
import { graphql } from 'gatsby';

import '@react-website-themes/job-interview/styles/variables';
import '@react-website-themes/job-interview/styles/global';

import Screens from '@react-website-themes/job-interview/components/Screens';
import Screen from '@react-website-themes/job-interview/components/Screen';
import Nav from '@react-website-themes/job-interview/components/Nav';
import Social from '@react-website-themes/job-interview/components/Social';
import Seo from '@react-website-themes/job-interview/components/Seo';

import ChevronUpIcon from 'react-feather/dist/icons/chevron-up';
import ChevronDownIcon from 'react-feather/dist/icons/chevron-down';
import GithubIcon from 'react-feather/dist/icons/github';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import MailIcon from 'react-feather/dist/icons/mail';

import avatar from '../content/images/avatar.jpg';

import config from 'content/meta/config';

const IndexPage = props => {
  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  const navIcons = {
    next: ChevronDownIcon,
    prev: ChevronUpIcon,
  };

  const socialLinks = [
    { url: 'https://github.com/greglobinski', icon: GithubIcon },
    { url: 'https://twitter.com/greglobinski', icon: TwitterIcon },
    { url: 'mailto:greglobinski@gmail.com', icon: MailIcon },
  ];

  const {
    data: {
      screens: { edges },
    },
  } = props;

  const screensData = edges.map(edge => {
    const {
      node: {
        fields: { prefix: id },
        html,
      },
    } = edge;

    const screen = { id: parseInt(id, 10), html };

    if (screen.id === edges.length) {
      screen.avatar = avatar;
    }

    return screen;
  });

  return (
    <React.Fragment>
      <Screens
        screensData={screensData}
        navComponent={Nav}
        screenComponent={Screen}
        socialComponent={Social}
        navIcons={navIcons}
        socialLinks={socialLinks}
      />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </React.Fragment>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    screens: allMarkdownRemark(
      filter: { fields: { source: { eq: "screens" }, prefix: { ne: null } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            prefix
            source
          }
          html
        }
      }
    }
  }
`;
