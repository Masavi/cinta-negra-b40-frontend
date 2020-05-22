import React, { createContext, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

export const HTTPContext = createContext();
// Set config defaults when creating the axiosInstance
const axiosInstance = axios.create({
  baseURL: 'https://cinta-negra-backend.herokuapp.com'
});

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const HTTPContextProvider = (props) => {
  const { token } = useContext(AuthContext);
  // useEffect(() => {
  //   console.log('🌞', token);
  //   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  // }, [token]);
  return (
    <HTTPContext.Provider value={{ axiosInstance }}>
      { props.children }
    </HTTPContext.Provider>
  )
}

export default HTTPContextProvider;
