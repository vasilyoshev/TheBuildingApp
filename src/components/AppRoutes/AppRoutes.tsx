import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Buildings, Home } from 'components';
import { selectIsLoggedIn } from 'slices';

export const AppRoutes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      {isLoggedIn && <Route path="/buildings" element={<Buildings />} />}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
