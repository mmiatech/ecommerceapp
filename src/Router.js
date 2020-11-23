import React, {useState, useEffect} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Admin from './Admin';
import Main from './Main';
import Profile from './Profile';

const Router = () => {
  const [current, setCurrent] = useState('home');

  useEffect(
    () => {
      setRoute();
      window.addEventListener('hashchange', setRoute);

      return () =>  window.removeEventListener('hashchange', setRoute);
    }
    , []
  );

  const setRoute = () => {
    //get location from window object
    const location = window.location.href.split('/');

    //path is the last part of location, location is an arry of strings
    const pathname = location[location.length-1];
    console.log('pathname: ', pathname);

    setCurrent(pathname ? pathname : 'home');
  }

  return (
    <HashRouter>
      <Nav current={current} />

      <Switch>
        <Route
          exact path='/'
          component={Main}
        />

        <Route
          path='/admin'
          component={Admin}
        />

        <Route
          path='/profile'
          component={Profile}
        />

        <Route
          component={Main}
        />
      </Switch>
    </HashRouter>
  );
}

export default Router;