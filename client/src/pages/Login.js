import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Container, Button } from 'react-bootstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div  style={{backgroundColor:'rgb(30, 30, 30)', height: '100vh'}}>
    <Container className="logininfo">
      <Link style={{fontFamily:'Encode Sans SC', color: "gold"}} to="/signup">← Go to Signup</Link>
      <h2 style={{fontSize: '60px', fontFamily: "permanent marker",  color: 'white'}}>Login</h2>
      <form style={{fontFamily:'Encode Sans SC', color: 'white'}} onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label id="loginlabel" style={{fontFamily:'Encode Sans SC', color: 'white'}} htmlFor="email">Email address:</label>
          <input style={{color: "black"}}
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label id="loginlabel" htmlFor="pwd">Password:</label>
          <input style={{color: "black"}}
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <Button  style={{fontFamily:'Encode Sans SC'}} variant="secondary" size="lg" type="submit">Submit</Button>
        </div>
      </form>
    </Container>
    </div>
  );
}
export default Login;