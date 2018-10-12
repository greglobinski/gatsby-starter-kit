import React from 'react';
import PropTypes from 'prop-types';

const Article = props => {
  const { children, className = '' } = props;

  return <article className={`article ${className}`}>{children}</article>;
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Article;
