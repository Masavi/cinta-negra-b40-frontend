import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Logout = () => {
  const { removeToken } = useContext(AuthContext);
  removeToken();
  alert('Successful logout');

  return (
    <Redirect to="/login" />
  )
}

export default Logout;
