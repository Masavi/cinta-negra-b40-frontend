import React from 'react';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  return (
    <React.Fragment>
      <h1 className="mb-4">Signup on Maui App</h1>
      <Form>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="text" id="firstName" name="inputFirstName" 
          placeholder="type your first name" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="text" name="lastName" id="inputLastname" placeholder="type your last name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="type your password here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Signup;