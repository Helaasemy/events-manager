import React from 'react';
import {Switch,Route} from "react-router-dom";
import Header from './components/Header/Header';
import Welcome from './components/Home/Welcome';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Welcome} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
