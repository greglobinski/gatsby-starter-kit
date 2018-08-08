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
            <div className="credits">
              {/*
                Please consider to not remove the credits section.
                That's the best way to say you appreciate my work.

                Thank you

                Greg Lobinski
              */}
              Built with{' '}
              <a href="https://github.com/greglobinski/gatsby-starter-kit">
                GatsbyJS Starter Kit
              </a>.
            </div>
          </footer>
        );
      }}
    />
  );
};

export default Footer;
