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
import { Building } from 'types';
import { editBuilding } from 'slices';
import styles from './EditBuildingDialog.module.scss';

interface EditBuildingDialogProps {
  isOpen: boolean;
  close: () => void;
  building: Building;
}

// TODO extract common logic from Add and Edit dialogs
export const EditBuildingDialog: FC<EditBuildingDialogProps> = ({
  isOpen,
  close,
  building,
}) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(building.id);
  const [name, setName] = useState(building.name);
  const [area, setArea] = useState(building.area);
  const [location, setLocation] = useState(building.location);
  const [image, setImage] = useState(building.image);

  const handleEditBuildingClick = () => {
    if (!id || !area || name?.length < 3) return;

    dispatch(editBuilding({ id, name, area, location, image }));
    close();
  };

  return (
    <Dialog onClose={close} open={isOpen}>
      <DialogTitle>Edit Building</DialogTitle>
      <DialogContent classes={{ root: styles.dialogContentRoot }}>
        <TextField
          label="ID"
          variant="outlined"
          value={id}
          onChange={(event) => setId(Number(event.target.value))}
          error={!id}
          disabled
        />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={name?.length < 3}
          autoFocus
        />
        <TextField
          label="Area"
          variant="outlined"
          value={area}
          onChange={(event) => setArea(Number(event.target.value))}
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
        <Button onClick={handleEditBuildingClick}>Edit Building</Button>
      </DialogActions>
    </Dialog>
  );
};
