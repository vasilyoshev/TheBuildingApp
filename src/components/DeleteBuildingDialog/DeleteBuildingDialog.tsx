import { FC } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

interface DeleteBuildingDialogProps {
  isOpen: boolean;
  close: () => void;
  buildingId: number;
  confirm: () => void;
}

export const DeleteBuildingDialog: FC<DeleteBuildingDialogProps> = ({
  isOpen,
  close,
  buildingId,
  confirm,
}) => {
  const deleteBuilding = () => {
    confirm();
    close();
  };

  return <Dialog onClose={close} open={isOpen}>
    <DialogTitle>Delete building with ID {buildingId}?</DialogTitle>
    <DialogActions>
      <Button onClick={close}>Cancel</Button>
      <Button onClick={deleteBuilding}>Delete Building</Button>
    </DialogActions>
  </Dialog>
};
