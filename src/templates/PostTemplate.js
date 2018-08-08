import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import { ShareButtonRectangle } from 'react-custom-share';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import EmailIcon from 'react-feather/dist/icons/mail';

import {
  // eslint-disable-next-line no-unused-vars
  global,
  Layout,
  Footer,
  Header,
  Branding,
  Menu,
  Article,
  Heading,
  Bodytext,
  Meta,
  NextPrev,
  Share,
  Author,
  Comments,
  Seo,
  layout,
  footer,
  header,
  branding,
  menu,
  article,
  heading,
  bodytext,
  meta,
  nextPrev,
  share,
  author,
  comments,
} from '../../../../mynpms/react-website-themes/src/default';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
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
      author: { html: authorHTML },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
    pageContext: { next, prev },
  } = props;

  const { headerTitle, headerSubTitle, siteUrl } = config;

  const url = siteUrl + slug;
  const shareBlockProps = {
    url: url,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
    ],
    text: title,
    longtext: excerpt,
  };

  return (
    <Layout themeStyle={layout} menu={menu}>
      <Header themeStyle={header} menu={menu}>
        <Branding
          themeStyle={branding}
          title={headerTitle}
          subTitle={headerSubTitle}
        />
        <Menu themeStyle={menu} items={menuItems} />
      </Header>
      <Article themeStyle={article}>
        <Heading themeStyle={heading} title={title} />
        <Meta
          themeStyle={meta}
          author="greg"
          prefix={prefix}
          categories={categories}
          icons={metaIcons}
        />
        <Bodytext themeStyle={bodytext} html={postHTML} />
        <Share themeStyle={share} shareBlockProps={shareBlockProps} />
        <NextPrev
          themeStyle={nextPrev}
          next={next}
          prev={prev}
          icons={nextPrevIcons}
        />
        <Author themeStyle={author} html={authorHTML} />
        <Comments slug={slug} siteUrl={siteUrl} themeStyle={comments} />
      </Article>
      <Footer
        themeStyle={footer}
        links={footerLinksHTML}
        copyright={copyrightHTML}
      />
      <Seo config={config} />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
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
