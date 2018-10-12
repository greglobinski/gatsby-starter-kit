import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from '../MainMenu';

describe('MainMenu', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    const items = [{ label: 'label 1', to: '/1' }];

    ReactDOM.render(<MainMenu items={items} />, div);
  });
});
