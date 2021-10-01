import React from 'react';
import './App.less';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Todos, Investments, InvestmentDetail } from './pages';
import { AHeader, ALeftBar } from './components/molecules';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AHeader />
        <div id="wrapper">
          <ALeftBar />
          <div id="content">
            <Switch>
              <Route path="/todos" exact component={Todos} />
              <Route path="/" exact component={Investments} />
              <Route path="/investments/:id" exact component={InvestmentDetail} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
