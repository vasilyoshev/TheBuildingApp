import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddBuildingDialog, BuildingsTable } from 'components';
import { Building } from 'types';
import { selectBuildings, setBuildings } from 'slices';
import buildingsMock from 'mocks/buildingsMock.json';
import styles from './Buildings.module.scss';

export const Buildings = () => {
  const dispatch = useDispatch();
  const buildings = useSelector(selectBuildings);
  const [isAddBuildingDialogOpen, setIsAddBuildingDialogOpen] = useState(false);

  useEffect(() => {
    new Promise<Array<Building>>((resolve) =>
      setTimeout(() => resolve(buildingsMock), 500)
    ).then((data) => dispatch(setBuildings(data)));
  }, []);

  if (!buildings) return <div className={styles.noData}>No data!</div>;

  return (
    <>
      <BuildingsTable />
      <Fab
        color="primary"
        classes={{ root: styles.addBuildingFabRoot }}
        onClick={() => setIsAddBuildingDialogOpen(true)}
      >
        <AddIcon />
      </Fab>
      <AddBuildingDialog
        isOpen={isAddBuildingDialogOpen}
        close={() => setIsAddBuildingDialogOpen(false)}
      />
    </>
  );
};
