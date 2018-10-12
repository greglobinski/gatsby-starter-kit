import React from 'react';
import PropTypes from 'prop-types';

const Bodytext = props => {
  const { html, children } = props;

  return (
    <React.Fragment>
      {html ? (
        <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div className="bodytext">{children}</div>
      )}
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string,
  children: PropTypes.node,
};

export default Bodytext;
