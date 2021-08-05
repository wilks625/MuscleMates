import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import NavBar from './components/NavBar'
import Matches from './pages/Matches'
import UpdateProfile from './pages/UpdateProfile'
import Location from './components/Location'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/userProfile">
              <UserProfile />
              </Route>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/updateProfile" component={UpdateProfile} />
              <Route exact path="/Location" component={Location} />
              <Route exact path="/matches" component={Matches} />
            </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
