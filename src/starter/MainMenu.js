import PropTypes from 'prop-types';
import React from 'react';

import MainMenuItem from './MainMenuItem';

const MainMenu = props => {
  const { items } = props;

  return (
    <nav className="menu">
      <ul>
        {items.map(item => {
          const { label, to, icon } = item;
          return <MainMenuItem key={label} label={label} to={to} icon={icon} />;
        })}
      </ul>
    </nav>
  );
};

MainMenu.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MainMenu;
