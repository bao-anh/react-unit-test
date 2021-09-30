import React from 'react';
import './App.less';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Todos, Investments } from './pages';
import { AHeader, ALeftBar } from './components/molecules';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AHeader />
        <div className="wrapper">
          <ALeftBar />
          <div className="content">
            <Switch>
              <Route path="/todos" exact component={Todos} />
              <Route path="/" exact component={Investments} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
