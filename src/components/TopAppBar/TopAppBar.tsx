import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import styles from './TopAppBar.module.scss';

export const TopAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        classes={{ root: styles.welcomeTypographyRoot }}
      >
        Welcome
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
