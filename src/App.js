import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import AccountProfile from './components/AccountProfile';
import AddUser from './components/AddUser';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users/new' component={AddUser} />
          
          <Route 
            exact 
            path='/account/profile' 
            render={()=> <AccountProfile title='yo'/>}
            
          />
        </Switch>
      </Container>
    </>

  )
}

export default App;
