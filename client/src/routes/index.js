import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '~/pages/Home';
import Discovery from '~/pages/Discovery';
import Search from '~/pages/Search';
import Album from '~/pages/Album';
import Favorites from '~/pages/Favorites';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" isPrivate exact component={Home} />
      <Route path="/discovery" isPrivate exact component={Discovery} />
      <Route path="/search" isPrivate exact component={Search} />
      <Route path="/album/:id" isPrivate exact component={Album} />
      <Route path="/favorites" isPrivate exact component={Favorites} />
      <Route path="/sign_in" isGuest exact component={SignIn} />
      <Route path="/sign_up" isGuest component={SignUp} />
    </Switch>
  );
}
