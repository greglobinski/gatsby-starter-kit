import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => {
  const { title, children } = props;

  return (
    <header className="heading">{title ? <h1>{title}</h1> : children}</header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
