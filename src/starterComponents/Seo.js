import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from 'content/meta/config';

const Seo = props => {
  const {
    siteTitle,
    siteTitlePostfix,
    siteDescription,
    siteLanguage,
    siteUrl,
  } = config;

  let { language, path, title, description } = props;

  language = language ? language : siteLanguage;
  title = title ? title + siteTitlePostfix : siteTitle;
  description = description ? description : siteDescription;

  const url = path ? siteUrl + path : siteUrl;

  return (
    <Helmet
      htmlAttributes={{ lang: language, prefix: 'og: http://ogp.me/ns#' }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      {/* <meta
        name="twitter:creator"
        content={config.authorTwitterAccount ? config.authorTwitterAccount : ''}
      /> */}
    </Helmet>
  );

  // const { data, facebook } = props;
  // const postTitle = ((data || {}).frontmatter || {}).title;
  // const postDescription = ((data || {}).frontmatter || {}).description;
  // const postCover = ((data || {}).frontmatter || {}).cover;
  // const postSlug = ((data || {}).fields || {}).slug;

  // const title = postTitle
  //   ? `${postTitle} - ${config.shortSiteTitle}`
  //   : config.siteTitle;
  // const description = postDescription
  //   ? postDescription
  //   : config.siteDescription;
  // const image = postCover ? postCover : config.siteImage;
  // const url = config.siteUrl + config.pathPrefix + postSlug;
};

Seo.propTypes = {
  language: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
};

export default Seo;
