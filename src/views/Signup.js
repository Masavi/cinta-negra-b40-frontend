import React, { useState } from 'react';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    switch (e.target.name) {
      case "inputFirstName":
        setFirstName(e.target.value)
        break;
      case "lastName":
        setLastName(e.target.value)
        break;
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando form!!');
    console.log(firstName, lastName, email, password);
  }

  return (
    <React.Fragment>
      <h1 className="mb-4">Signup on Maui App</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input 
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="type your first name"
            value={firstName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="type your last name"
            value={lastName}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email"
            value={email}
            onChange={handleInput} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" 
            value={password}
            onChange={handleInput} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Signup;