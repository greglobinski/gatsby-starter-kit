import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import '@react-website-themes/job-interview/styles/variables';
import '@react-website-themes/job-interview/styles/global';

import Screens from '@react-website-themes/job-interview/components/Screens';
import Screen from '@react-website-themes/job-interview/components/components/Screen';
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
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

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

  const screensData = [
    {
      id: 1,
      headline: `Hi, my name is Greg.`,
      body: `Actually, it's Grzegorz. In JavaScript we would state Grzegorz==Greg, so...  ;) I'm Polish.`,
    },
    {
      id: 2,
      headline: `I'm a front-end developer.`,
      body:
        'Recently, on a daily basis I use: JavaScript (ES6), React, Gatsby, CSS (Emotion), GIT, just to name the most important bits.',
    },
    {
      id: 3,
      headline: `I used to be an art director...`,
      body:
        'I know what does the aesthetics mean and I know how important the details are.',
    },
    {
      id: 4,
      headline: `... and a web designer.`,
      body: `I am still interested in web UX and I know the designers' language.`,
    },
    {
      id: 5,
      headline: `I'm looking for a full time job.`,
      body:
        'On site (Warsaw/London) or remote. If you think I could match to your team drop me a line.',
    },
    {
      id: 6,
      headline: 'Thank you.',
      body: `You can find me at:`,
      avatar: avatar,
    },
  ];

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
