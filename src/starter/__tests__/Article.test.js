import React from 'react';
import ReactDOM from 'react-dom';
import Article from '../Article';

describe('Article', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Article>This is an Article</Article>, div);
  });
});
