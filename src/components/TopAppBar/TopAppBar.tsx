import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { LoginDialog } from 'components';
import { selectIsLoggedIn } from 'slices';
import styles from './TopAppBar.module.scss';

export const TopAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          classes={{ root: styles.welcomeTypographyRoot }}
        >
          Welcome
        </Typography>
        {!isLoggedIn && (
          <Button color="inherit" onClick={() => setIsLoginDialogOpen(true)}>
            Login
          </Button>
        )}
        <LoginDialog
          isOpen={isLoginDialogOpen}
          close={() => setIsLoginDialogOpen(false)}
        />
      </Toolbar>
    </AppBar>
  );
};
