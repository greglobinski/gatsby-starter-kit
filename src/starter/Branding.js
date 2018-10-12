import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Branding = props => {
  const { title, subTitle } = props;

  return (
    <Link className="branding" to="/">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Link>
  );
};

Branding.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default Branding;
