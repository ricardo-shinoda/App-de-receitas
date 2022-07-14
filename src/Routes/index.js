// import Header from '../Components/Header ';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Components/Login';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />

      {/* <Route path="/foods">{ <Foods />}</Route>
      <Routes path="/drinks">{ <Drinks />}</Routes> */}
    </Switch>
  );
}

export default Main;
