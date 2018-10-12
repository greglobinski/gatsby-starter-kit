import React from 'react';
import ReactDOM from 'react-dom';
import Branding from '../Branding';

describe('Branding', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Branding title="This is title" />, div);
  });
});
