import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// import AuthLayout from '~/layouts/auth';
// import DefaultLayout from '~/layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  isGuest = false,
  ...rest
}) {
  const signed = store.getState().auth.signedIn;

  if (!signed && isPrivate) {
    return <Redirect to="/sign_in" />;
  }
  if (signed && isGuest) {
    return <Redirect to="/" />;
  }

  // const Layout = isGuest ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        // <Layout>
        <Component {...props} />
        // </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isGuest: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isGuest: false,
};
