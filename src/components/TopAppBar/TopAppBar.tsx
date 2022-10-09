import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { LoginDialog } from 'components';
import { selectIsLoggedIn, selectUsername } from 'slices';
import styles from './TopAppBar.module.scss';

export const TopAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUsername);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  return (
    <>
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
          {isLoggedIn && (
            <div className={styles.userInfoWrapper}>
              <span>{username}</span>
              <AccountCircle />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <LoginDialog
        isOpen={isLoginDialogOpen}
        close={() => setIsLoginDialogOpen(false)}
      />
    </>
  );
};
