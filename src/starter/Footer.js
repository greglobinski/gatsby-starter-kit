import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

const Footer = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          footerLinks: markdownRemark(
            fileAbsolutePath: { regex: "/parts/footerLinks/" }
          ) {
            html
          }
          copyright: markdownRemark(
            fileAbsolutePath: { regex: "/parts/copyright/" }
          ) {
            html
          }
        }
      `}
      render={data => {
        const {
          footerLinks: { html: footerLinksHTML },
          copyright: { html: copyrightHTML },
        } = data;

        return (
          <footer className="footer">
            <div
              className="links"
              dangerouslySetInnerHTML={{ __html: footerLinksHTML }}
            />
            <div
              className="copyright"
              dangerouslySetInnerHTML={{ __html: copyrightHTML }}
            />
          </footer>
        );
      }}
    />
  );
};

export default Footer;
