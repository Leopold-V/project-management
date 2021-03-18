import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { auth } from './firebase';

import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
