import { Navigate, Route, Routes } from 'react-router-dom';
import { Buildings, Home } from 'components';
import './App.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buildings" element={<Buildings />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
