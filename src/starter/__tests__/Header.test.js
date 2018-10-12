import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header title="This is title" />, div);
  });
});
