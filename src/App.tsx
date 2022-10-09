import { Paper } from '@mui/material';
import { AppRoutes, BottomNavigationBar, TopAppBar } from 'components';
import styles from './App.module.scss';

export const App = () => (
  <>
    <TopAppBar />
    <Paper classes={{ root: styles.paperRoot }}>
      <AppRoutes />
    </Paper>
    <BottomNavigationBar />
  </>
);
