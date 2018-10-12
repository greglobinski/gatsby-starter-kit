import PropTypes from 'prop-types';
import React from 'react';

import Header from 'starter/Header';
import Footer from 'starter/Footer';

const Layout = props => {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
