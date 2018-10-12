import PropTypes from 'prop-types';
import React from 'react';

const Layout = props => {
  const { children } = props;

  return <div className="layout">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
