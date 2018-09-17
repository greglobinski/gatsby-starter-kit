import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '@react-website-themes/clean-diary/styles/variables';
import '@react-website-themes/clean-diary/styles/global';

import { ShareButtonIconOnly } from 'react-custom-share';

import Article from '@react-website-themes/clean-diary/components/Article';
import Branding from '@react-website-themes/clean-diary/components/Branding';
import Bodytext from '@react-website-themes/clean-diary/components/Bodytext';
import Comments from '@react-website-themes/clean-diary/components/Comments';
import Footer from '@react-website-themes/clean-diary/components/Footer';
import Header from '@react-website-themes/clean-diary/components/Header';
import Heading from '@react-website-themes/clean-diary/components/Heading';
import Layout from '@react-website-themes/clean-diary/components/Layout';
import Menu from '@react-website-themes/clean-diary/components/Menu';
import Meta from '@react-website-themes/clean-diary/components/Meta';
import NextPrev from '@react-website-themes/clean-diary/components/NextPrev';
import Seo from '@react-website-themes/clean-diary/components/Seo';
import Share from '@react-website-themes/clean-diary/components/Share';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import logo from 'content/images/logo.png';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import EmailIcon from 'react-feather/dist/icons/mail';
import ArrowUpIcon from 'react-feather/dist/icons/arrow-up';

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

const actionIcons = {
  toTop: ArrowUpIcon,
};

const nextPrevIcons = {
  next: NextIcon,
  prev: PrevIcon,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        html: postHTML,
        frontmatter: { title, categories },
        fields: { slug, prefix },
      },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    pageContext: { next, prev },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteLanguage,
    siteTitlePostfix,
    timeOffset,
  } = config;

  const url = siteUrl + slug;
  const shareBlockProps = {
    url: url,
    button: ShareButtonIconOnly,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
    ],
    text: title,
    longtext: excerpt,
  };

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
        <Menu items={menuItems} actionIcons={actionIcons} />
      </Header>
      <Article>
        <Heading title={title} />
        <Meta
          author="greg"
          prefix={prefix}
          categories={categories}
          icons={metaIcons}
          timeOffset={timeOffset}
        />
        <Bodytext html={postHTML} />
        <Share shareBlockProps={shareBlockProps} />
        <NextPrev
          next={next}
          prev={prev}
          icons={nextPrevIcons}
          timeOffset={timeOffset}
        />
        <Comments
          slug={slug}
          siteUrl={siteUrl}
          appId={process.env.GATSBY_FACEBOOK_APPID}
        />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
      />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        categories
      }
    }
    author: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/author/" }
    ) {
      html
    }
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
