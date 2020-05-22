import React, { useState, useContext } from 'react';
import { HTTPContext } from '../../contexts/httpContext';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const UserForm = (props) => {
  const { name, email, id } = props.user;
  const { axiosInstance } = useContext(HTTPContext);
  const [firstName, setFirstName] = useState(name);
  const [lastName, setLastName] = useState('');
  const [formEmail, setFormEmail] = useState(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      first_name: firstName,
      last_name: lastName,
      email,
    }
    try {
      const res = await axiosInstance.patch(`https://cinta-negra-backend.herokuapp.com/api/v1/users/${id}`, jsonSend);
      console.log(res);
      alert('Profile modified')
      setFirstName(firstName)
    } catch (error) {
      alert('Error modifying profile')
    }
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit} className="mt-4">
        <FormGroup>
          <Label>First Name</Label>
          <Input 
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="type your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="type your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default UserForm;