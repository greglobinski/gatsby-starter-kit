import React from 'react';
import ReactDOM from 'react-dom';
import Seo from '../Seo';

describe('Seo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Seo
        url="https://site.com"
        title="Site title"
        description="Site description"
        image="preview.png"
      />,
      div
    );
  });
});
