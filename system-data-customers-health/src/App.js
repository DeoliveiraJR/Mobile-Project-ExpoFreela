// =====================================------PROJECT SYSTEM-HEALTH------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Components/ProfileEdit';
import ProfileCreate from './Pages/ProfileCreate';
import NotFound from './Pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/customer/:id" component={ Album } />
          <Route path="/colected" component={ Favorites } />
          <Route path="/profile" component={ Profile } />
          <Route path="/createProfile" component={ ProfileCreate } />
          <Route path="*" component={ NotFound } />
        </Switch>
        <Switch>
          <Route path="/profile/edit" component={ ProfileEdit } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
