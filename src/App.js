import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { auth } from './firebase';
import store from './store';

import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';

function App() {

  const [currentUser, setcurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setcurrentUser(user.email);
        setLoading(false);
      } else {
        setcurrentUser(false);
        setLoading(false);
      }
		})
		return unsubscribe;
	}, []);

  if (loading) {
    return (
      <div>Loading application...</div>
    )
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => currentUser ? <Home /> : <Login />}/>
          <Route exact path='/login' render={() => currentUser ? <Home /> : <Login />}/>
          <Route exact path='/register' render={() => currentUser ? <Home /> : <Register />}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
