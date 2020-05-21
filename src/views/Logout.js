import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Logout = () => {
  const { removeTokenAndLogout } = useContext(AuthContext);
  removeTokenAndLogout();
  alert('Successful logout');

  return (
    <Redirect to="/login" />
  )
}

export default Logout;
