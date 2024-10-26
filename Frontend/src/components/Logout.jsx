import React from 'react';
import { useAuth } from '../contex/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem('Users');
      toast.success('Logout Successful', { duration: 3000 }); 

      
      setTimeout(() => {
        window.location.reload();
      }, 300); // Reload after the toast duration
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <button
        className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-red-500 duration-300 cursor-pointer'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
