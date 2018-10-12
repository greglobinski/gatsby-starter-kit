import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

export const PureFooter = ({ data }) => {
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
};

export const Footer = props => (
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
    render={data => <PureFooter data={data} {...props} />}
  />
);

PureFooter.propTypes = {
  data: PropTypes.shape({
    footerLinks: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
    copyright: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;
