import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setAuth] = useState(false);

  const setToken = (token) => {
    localStorage.setItem('token', token);
    setAuth(true);
  }

  const removeToken = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  const getToken = () => {
    return localStorage.getItem('token');
  }

  return (
    <AuthContext.Provider value={{ 
      color:"blue", isAuth, getToken, setToken, removeToken
    }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
