import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute.js'
import { WelcomePage } from './components/WelcomPage.js';
import { ProfessorPage } from './components/ProfessorPage';
import { StudentPage } from './components/StudentPage';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route exact path='/professor/login'>
        <ProfessorPage />
      </Route>
      <Route exact path='/student/login'>
        <StudentPage />
      </Route>
    </Switch>
  );
}

export default App;
