import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

//import '@react-website-themes/job-interview/styles/variables';
import '../../../../mynpms/react-website-themes/packages/job-interview/src/styles/variables';
import '../../../../mynpms/react-website-themes/packages/job-interview/src//styles/global';

import Screens from '../../../../mynpms/react-website-themes/packages/job-interview/src/components/Screens';
import Screen from '../../../../mynpms/react-website-themes/packages/job-interview/src/components/Screen';
import Seo from '../../../../mynpms/react-website-themes/packages/job-interview/src/components/Seo';

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
    { id: 1, headline: `Hi, I'm Greg`, text: 'subtext', background: '#fff' },
    {
      id: 2,
      headline: `I'm a front-end developer`,
      text: 'subtext',
      background: '#BCE4F2',
    },
    {
      id: 3,
      headline: `I used to be an art director and web designer`,
      text: 'subtext',
      background: '#FCC4D9',
    },
    {
      id: 4,
      headline: 'Thank you.',
      text: 'subtext',
      background: '#D69E7A',
      avatar: avatar,
    },
  ].reverse();

  return (
    <>
      <Screens screens={screens} />
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
