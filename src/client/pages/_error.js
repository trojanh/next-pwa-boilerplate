import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../components/organisms/DefaultLayout';

const _error = props => {
  return (
      <DefaultLayout title="NextPWA - Error">
        <h1 style={{color: "Red"}}>404!</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </DefaultLayout>
  );
};

_error.propTypes = {

};

export default _error;
