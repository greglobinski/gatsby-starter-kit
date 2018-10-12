import React from 'react';
import PropTypes from 'prop-types';

import Branding from './Branding';
import MainMenu from './MainMenu';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

const Header = props => {
  const { title, subTitle = '', menuItems } = props;

  return (
    <header className="header">
      <Branding title={title} subTitle={subTitle} />
      {menuItems && <MainMenu items={menuItems} />}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.array,
  subTitle: PropTypes.string,
};

export default Header;
