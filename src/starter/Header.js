import React from 'react';

import Branding from 'starter/Branding';
import MainMenu from 'starter/MainMenu';

import config from 'content/meta/config';
import menu from 'content/meta/menu';

const Header = props => {
  const { headerTitle, headerSubTitle } = config;

  return (
    <header className="header">
      <Branding title={headerTitle} subTitle={headerSubTitle} />
      {menu && <MainMenu items={menu} />}
    </header>
  );
};

export default Header;
