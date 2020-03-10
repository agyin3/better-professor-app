import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute.js'
import { WelcomePage } from './components/WelcomPage.js';
import { ProfessorLogin } from './components/ProfessorLogin.js';
import { ProfessorSignup } from './components/ProfessorSignup.js';
import { StudentLogin } from './components/StudentLogin.js';
import { StudentSignup } from './components/StudentSignup.js';
import ProfessorDashboard from './components/ProfessorDashboard';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route exact path='/professor/login'>
        <ProfessorLogin />
      </Route>
      <Route exact path='/professor/signup'>
        <ProfessorSignup />
      </Route>
      <Route exact path='/student/login'>
        <StudentLogin />
      </Route>
      <Route exact path='/student/signup'>
        <StudentSignup />
      </Route>
      <PrivateRoute exact path='/professor/dashboard' component={ProfessorDashboard}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
