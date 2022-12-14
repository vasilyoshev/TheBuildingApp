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
import { addBuilding } from 'slices';
import styles from './AddBuildingDialog.module.scss';

interface AddBuildingDialogProps {
  isOpen: boolean;
  close: () => void;
}

export const AddBuildingDialog: FC<AddBuildingDialogProps> = ({
  isOpen,
  close,
}) => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const handleAddBuildingClick = () => {
    if (!id || !area || name?.length < 3) return;

    dispatch(addBuilding({ id: Number(id), name, area: Number(area), location, image }));
    close();
  };

  return (
    <Dialog onClose={close} open={isOpen}>
      <DialogTitle>Add Building</DialogTitle>
      <DialogContent classes={{ root: styles.dialogContentRoot }}>
        <TextField
          label="ID"
          variant="outlined"
          value={id}
          onChange={(event) => setId(event.target.value)}
          error={!id}
          autoFocus
        />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={name?.length < 3}
        />
        <TextField
          label="Area"
          variant="outlined"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          error={!area}
        />
        <TextField
          label="Location"
          variant="outlined"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <TextField
          label="Image"
          variant="outlined"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={handleAddBuildingClick}>Add Building</Button>
      </DialogActions>
    </Dialog>
  );
};
