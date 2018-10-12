import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout>This is an Layout</Layout>, div);
  });
});
