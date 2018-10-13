import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Seo = props => {
  const {
    url,
    language = 'en',
    title,
    description,
    type = 'website',
    twitter,
    image,
  } = props;

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
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      {twitter && <meta name="twitter:creator" content={twitter} />}
    </Helmet>
  );
};

Seo.propTypes = {
  language: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
  twitter: PropTypes.string,
};

export default Seo;
