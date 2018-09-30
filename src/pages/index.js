import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

//import '@react-website-themes/job-interview/styles/variables';
import '@react-website-themes/job-interview/styles/variables';
import '@react-website-themes/job-interview//styles/global';

import Screens from '@react-website-themes/job-interview/components/Screens';
import Screen from '@react-website-themes/job-interview/components/Screen';
import Nav from '@react-website-themes/job-interview/components/Nav';
import Seo from '@react-website-themes/job-interview/components/Seo';

import ChevronRightIcon from 'react-feather/dist/icons/chevron-right';
import ChevronLeftIcon from 'react-feather/dist/icons/chevron-left';

import avatar from '../content/images/avatar.jpg';

import config from 'content/meta/config';

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  const screens = [
    {
      id: 1,
      headline: `Hi, my name is Greg.`,
      text: `Actually, it's Grzegorz. In JavaScript we would state Grzegorz==Greg, so...  ;) I'm Polish.`,
    },
    {
      id: 2,
      headline: `I'm a front-end developer`,
      text:
        'Recently, on a daily basis I use: JavaScript (ES6), React, Gatsby, CSS (Emotion), GIT, just to name the most important bits.',
    },
    {
      id: 3,
      headline: `I used to be an art director...`,
      text:
        'I know what does the aesthetics mean and I know how important the details are.',
    },
    {
      id: 4,
      headline: `... and a web designer.`,
      text: `I am still interested in web UX and I know how to talk with designers.`,
    },
    {
      id: 5,
      headline: `I'm looking for a full time job`,
      text: 'On site (Warsaw/PL or London/UK) or remote.',
    },
    { id: 6, headline: 'Thank you.', text: 'subtext', avatar: avatar },
  ].reverse();

  return (
    <>
      <Screens
        screens={screens}
        navComponent={Nav}
        screenComponent={Screen}
        icons={{ next: ChevronRightIcon, prev: ChevronLeftIcon }}
      />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
