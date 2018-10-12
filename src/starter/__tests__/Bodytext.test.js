import React from 'react';
import ReactDOM from 'react-dom';
import Bodytext from '../Bodytext';

describe('Bodytext', () => {
  it('renders without crashing with children', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bodytext>This is a Bodytext</Bodytext>, div);
  });

  it('renders without crashing with html prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bodytext html="This is an Article" />, div);
  });
});
