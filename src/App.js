import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { auth } from './firebase';
import store from './store';

import { setUser } from './slices/user';

import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';

function App() {

  const [currentUser, setcurrentUser] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.email);
        setcurrentUser(user.email);
        store.dispatch(setUser((user.email)));
      } else {
        setcurrentUser(false);
      }
		})
		return unsubscribe;
	}, []);

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
