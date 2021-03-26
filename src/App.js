import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { auth } from './firebase';
import store from './store';
import { fetchProjects } from './actions/actionsProjects';
import { fetchTasks } from './actions/actionsTasks';

import { Layout } from './components/layout/Layout';
import { Home } from './components/pages/Home';
import { Dashboard } from './components/pages/Dashboard';
import { Project } from './components/pages/Project';
import { Profile } from './components/pages/Profile';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { NotFound } from './components/pages/NotFound';

function App() {
  const [currentUser, setcurrentUser] = useState(false);
  const [loading, setloading] = useState(true);

  const fetchData = (user) => {
    store
      .dispatch(fetchProjects(user))
      .then(() => store.dispatch(fetchTasks(user)))
      .then(() => setloading(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setcurrentUser(user.email);
        fetchData(user);
      } else {
        setcurrentUser(false);
        setloading(false);
      }
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading application...</div>;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Toaster position="bottom-center" reverseOrder={true} />
          <Switch>
            <Route exact path="/" render={() => (currentUser ?<Layout><Home /></Layout> : <Redirect to="/login" />)} />
            <Route path="/login" render={() => (currentUser ? <Layout><Redirect to="/" /></Layout> : <Login />)} />
            <Route path="/register" render={() => (currentUser ? <Layout><Redirect to="/" /></Layout> : <Register />)} />
            <Route
              path="/project/:id"
              render={(props) => (currentUser ? <Layout><Project {...props} /></Layout> : <Redirect to="/login" />)}
            />
            <Route path="/dashboard" render={() => (currentUser ? <Layout><Dashboard /></Layout> : <Redirect to="/login" />)} />
            <Route path="/profile" render={() => (currentUser ? <Layout><Profile /></Layout> : <Redirect to="/login" />)} />
            <Route render={() => (currentUser ? <NotFound /> : <Redirect to="/login" />)} />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
