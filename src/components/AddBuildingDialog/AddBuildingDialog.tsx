import { FC, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Building } from 'types';
import styles from './AddBuildingDialog.module.scss';

interface AddBuildingDialogProps {
  isOpen: boolean;
  close: () => void;
  addBuilding: (building: Building) => void;
}

export const AddBuildingDialog: FC<AddBuildingDialogProps> = ({
  isOpen,
  close,
  addBuilding,
}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const handleAddBuildingClick = () => {
    if (!id || !name || !area) return;

    addBuilding({ id: Number(id), name, area: Number(area), location, image });
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
          error={!name}
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
