import React from 'react';
// import propTypes from 'prop-types';

class NotFound extends React.Component {
  render() {
    return (
      <div
        data-testid="page-not-found"
      >
        1.6 - Page Not Found!
      </div>
    );
  }
}

NotFound.propTypes = {
  // prop1: propTypes.string.isRequired,
};

export default NotFound;
