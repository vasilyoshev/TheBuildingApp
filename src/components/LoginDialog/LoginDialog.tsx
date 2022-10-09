import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { setIsLoggedIn, setUsername } from 'slices';
import styles from './LoginDialog.module.scss';

interface LoginDialogProps {
  isOpen: boolean;
  close: () => void;
}

export const LoginDialog: FC<LoginDialogProps> = ({ isOpen, close }) => {
  const dispatch = useDispatch();
  const [usernameInput, setUsernameInput] = useState<string>('');

  const login = () => {
    if (!usernameInput) return;

    dispatch(setUsername(usernameInput));
    dispatch(setIsLoggedIn(true));
    close();
  };

  return (
    <Dialog onClose={close} open={isOpen}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent classes={{ root: styles.dialogContentRoot }}>
        <TextField
          label="Username"
          variant="outlined"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          error={!usernameInput}
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={login}>Login</Button>
      </DialogActions>
    </Dialog>
  );
};
