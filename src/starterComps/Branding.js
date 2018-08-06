import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Branding = props => {
  const { title, subTitle } = props;

  return (
    <Link className="branding" to="/">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Link>
  );
};

Branding.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  logo: PropTypes.node,
};

export default Branding;
