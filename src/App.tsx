import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {store} from './store';
import {Provider} from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import Index from './components/Index';
import Login from './pages/login';
import Err from './pages/err';
import './App.css';
const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/err" exact component={Err}></Route>
          <PrivateRoute path='/' component={Index}/>
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
