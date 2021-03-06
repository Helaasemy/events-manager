import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase, { FirebaseContext } from './firebase';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

class Root extends React.Component {
 
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
     <App/>
     </FirebaseContext.Provider>
    );
  }
}
const RootwithAuth = withRouter(Root);
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <RootwithAuth />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
