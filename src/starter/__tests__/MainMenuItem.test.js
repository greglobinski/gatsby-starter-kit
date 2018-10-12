import React from 'react';
import ReactDOM from 'react-dom';
import MainMenuItem from '../MainMenuItem';

describe('MainMenuItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainMenuItem label="label" to="/" />, div);
  });
});
