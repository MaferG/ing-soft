import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase';

export function LogOut () {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/auth/sign-in');
  }, []);

  return null;
};

export default LogOut;