import React from 'react';
import './App.less';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Todos } from './pages';
import { AHeader } from './components/molecules';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AHeader />
        <Switch>
          <Route path="/todos" exact component={Todos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
