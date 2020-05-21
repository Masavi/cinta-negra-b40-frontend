import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Book from '../components/Book/Book.js';
// Conexion a mi websocket
// El web socket retorna un objeto con datos

const BooksList = () => {
  const { axiosInstance } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [text, setText] = useState('Loading books...');

  const getBooks = () => axiosInstance.get('/api/v1/books');

  useEffect( () => {
    getBooks()
      .then((response) => {
        const books = response.data;
        setBooks(books);
        setText(`There are ${books.length} available books`);
      })
      .catch(() => setText(`There are no available books`));
  }, [])

  return ( 
    <React.Fragment>
      <h1>Available books</h1>
      <h2 className="mb-4"> { text } </h2>
      { books.map((book) => {
        return <Book 
          key={book._id}
          author={book.author} 
          title={book.title} />
      })}
    </React.Fragment>
  );
}

export default BooksList;