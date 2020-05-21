import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const history = useHistory();
  const [isAuth, setAuth] = useState(false);

  const getToken = () => {
    return localStorage.getItem('token');
  }

  // Si usamos useEffect sin el segundo argumento de arreglo,
  // esto se ejecuta cada vez que se renderice nuestro component
  // Equivalente a componenteDidUpdate
  // useEffect(() => console.log('use Effect!!!!'));

  // Si quiero que solo se ejecute useEffect una sola vez, 
  // y que esa vez sea cuando se renderiza por primera vez,
  // usamos el segundo argumento del arreglo vacío
  // Equivalente a componentDidMount
  useEffect(() => { if (getToken()) setAuth(true) }, []);

  const setTokenAndLogin = (token) => {
    localStorage.setItem('token', token);
    setAuth(true);
    return history.push('/');
  }

  const removeTokenAndLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ 
      isAuth, getToken, setTokenAndLogin, removeTokenAndLogout
    }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
