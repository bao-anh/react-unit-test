import React from 'react';
import './App.less';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Todos } from './pages';
import { AHeader, ALeftBar } from './components/molecules';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AHeader />
        <div className="wrapper">
          <ALeftBar />
          <Switch>
            <Route path="/todos" exact component={Todos} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
