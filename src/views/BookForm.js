import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const BookForm = () => {
  // Contexto
  const { isAuth, axiosInstance } = useContext(AuthContext);

  // Estado
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  // Redireccionar si el usuario no esta autentica
  if (!isAuth) return ( <Redirect to="/login" /> )

  // Funciones
  const formCleanup = () => {
    setAuthor('');
    setTitle('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonSend = {
      author,
      title,
    }

    try {
      await axiosInstance.post('/api/v1/books', jsonSend);
      formCleanup();
      alert('Book successfully added');
    } catch (error) {
      alert(error);
    }
  };

  // Render
  return (
    <React.Fragment>
      <h1 className="mb-4">Add a new book</h1>
      <Form onSubmit={handleSubmit}>
      <FormGroup>
          <Label>Author</Label>
          <Input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="type the author's name here" />
        </FormGroup>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="type your title" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default BookForm;
 