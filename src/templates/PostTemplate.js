import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import { ShareButtonIconOnly } from 'react-custom-share';

import Article from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Article';
import Branding from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Branding';
import Bodytext from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Bodytext';
import Comments from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Comments';
import Footer from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Footer';
import Header from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Header';
import Heading from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Heading';
import Menu from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Menu';
import Meta from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Meta';
import NextPrev from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/NextPrev';
import Seo from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Seo';
import Share from '../../../../mynpms/react-website-themes/packages/side-nav/src/components/Share';

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
  //console.log(props);
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
    <React.Fragment>
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
    </React.Fragment>
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
