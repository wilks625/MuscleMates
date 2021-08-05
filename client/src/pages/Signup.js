import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Container, Button } from 'react-bootstrap';

function Signup(props) {
  const [formState, setFormState] = useState({ username: '', firstname: '', lastname: '', email: '', password: '', });
  const [addUser] = useMutation(ADD_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        firstname: formState.firstname,
        lastname: formState.lastname,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    console.log(formState.username, formState.firstname, formState.lastname, formState.email, formState.password, formState.location);
  } catch (error) {
    console.log(error);
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
    <Container className="signupinfo">
      <Link style={{fontFamily:'Arial Narrow', color: "gold"}} to="/login">← Go to Login</Link>
      <h2 style={{fontSize: '60px', fontFamily: "permanent marker",  color: 'white'}} >Signup</h2>
      <form style={{fontFamily:'Arial Narrow', color: 'white'}}  className="signupform" onSubmit={handleFormSubmit}>
      <div className="flex-row space-between my-2">
          <label id="signuplabel" htmlFor="username">Username:</label>
          <input style={{color: "black"}}
            placeholder="user"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label id="signuplabel" htmlFor="firstName">First Name:</label>
          <input style={{color: "black"}}
            placeholder="First"
            name="firstname"
            type="firstname"
            id="firstname"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label id="signuplabel" htmlFor="lastName">Last Name:</label>
          <input style={{color: "black"}}

            placeholder="Last"
            name="lastname"
            type="lastname"
            id="lastname"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label id="signuplabel" htmlFor="email">Email:</label>
          <input style={{color: "black"}}
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label id="signuplabel" htmlFor="pwd">Password:</label>
          <input style={{color: "black"}}
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="signupbutton flex-row flex-end">
          <Button style={{fontFamily:'Arial Narrow'}} variant="secondary" size="lg" type="submit">Submit</Button>
        </div>
      </form>
    </Container>
    </div>
  );
}
export default Signup;