import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" isPrivate exact component={Home} />
      <Route path="/sign_in" isGuest exact component={SignIn} />
      <Route path="/sign_up" isGuest component={SignUp} />
    </Switch>
  );
}
