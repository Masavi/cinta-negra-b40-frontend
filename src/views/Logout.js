import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Logout = () => {
  const history = useHistory();
  const { removeToken } = useContext(AuthContext);
  removeToken();
  alert('Succesful logout');
  // history.push('/login');
}

export default Logout;
