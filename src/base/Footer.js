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
          copyrightNote: markdownRemark(
            fileAbsolutePath: { regex: "/parts/copyrightNote/" }
          ) {
            html
          }
        }
      `}
      render={data => {
        const {
          footerLinks: { html: footerLinksHTML },
          copyrightNote: { html: ccopyrightNotetHTML },
        } = data;

        return (
          <footer className="footer">
            <div
              className="footerLinks"
              dangerouslySetInnerHTML={{ __html: footerLinksHTML }}
            />
            <div
              className="copyrightNote"
              dangerouslySetInnerHTML={{ __html: ccopyrightNotetHTML }}
            />
          </footer>
        );
      }}
    />
  );
};

export default Footer;
