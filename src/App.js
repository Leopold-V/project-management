import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { auth } from './firebase';
import store from './store';
import { fetchProjects } from './slices/projects';

import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Project } from './components/pages/Project';
import { Layout } from './components/layout/Layout';
import { Profile } from './components/pages/Profile';

function App() {
  const [currentUser, setcurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setcurrentUser(user.email);
        store.dispatch(fetchProjects(user));
      } else {
        setcurrentUser(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading application...</div>;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => (currentUser ? <Home /> : <Redirect to="/login" />)} />
            <Route path="/login" render={() => (currentUser ? <Redirect to="/" /> : <Login />)} />
            <Route path="/register" render={() => (currentUser ? <Redirect to="/" /> : <Register />)} />
            <Route
              path="/project/:id"
              render={(props) => (currentUser ? <Project {...props} /> : <Redirect to="/login" />)}
            />
            <Route path="/profile" render={() => (currentUser ? <Profile /> : <Redirect to="/login" />)} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
