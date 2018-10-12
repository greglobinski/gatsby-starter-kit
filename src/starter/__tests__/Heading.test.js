import React from 'react';
import ReactDOM from 'react-dom';
import Heading from '../Heading';

describe('Heading', () => {
  it('renders without crashing with children', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading>This is a Heading</Heading>, div);
  });

  it('renders without crashing with title prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading title="This is a Heading" />, div);
  });
});
