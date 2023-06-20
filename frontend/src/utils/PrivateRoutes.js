import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  // Cek apakah token tersimpan di local storage
  const isAuthenticated = localStorage.getItem('token');

  return (
    isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
  );
}

export default PrivateRoutes;