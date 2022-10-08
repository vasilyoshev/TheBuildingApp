import { Navigate, Route, Routes } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Buildings, Home } from 'components';
import styles from './App.module.scss';

export const App = () => {
  return (
    <Paper classes={{ root: styles.paperRoot }}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Paper>
  );
};
