import React from 'react';
import ReactDOM from 'react-dom';
import { PureFooter as Footer } from '../Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    const data = {
      footerLinks: {
        html:
          '<ul>\n<li>Github <a href="https://github.com/greglobinski/gatsby-starter-kit">gatsby-starter-kit</a></li>\n<li>Built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li><a href="https://dev.greglobinski.com">Front-end development</a> with Greg</li>\n</ul>',
      },
      copyright: {
        html: '<p>Copyright 2018 greg lobinski</p>',
      },
    };

    ReactDOM.render(<Footer data={data} />, div);
  });
});
