import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Landing from './component/landingpage/Landing'
import Navbar from './component/navbar/Navbar'
import Volunteer from './component/volunteer/Volunteer'
import Handicap from './component/handicap/Handicap'
import SignUp from './component/other/signUp/SignUp'
import SignIn from './component/other/signIn/SignIn'
import HelpContainer  from './component/help/HelpContainer';


function App() {
  return (
    <div className="App">
      <Navbar />

    <Switch>
        <Route 
          path='/' 
          render={() => <Landing />}
          exact
        />

        <Route 
          path='/volunteer' 
          render={() => <Volunteer />}
          exact
        />
        
        <Route 
          path='/help' 
          render={() => <HelpContainer />}
          exact
        />

        <Route 
          path='/handicap' 
          render={() => <Handicap />}
          exact
        />

        <Route 
          path='/signin' 
          render={() => <SignIn />}
          exact
        />

        <Route 
          path='/signup' 
          render={() => <SignUp />}
          exact
        />


    </Switch>

    </div>
  );
}

export default App;
