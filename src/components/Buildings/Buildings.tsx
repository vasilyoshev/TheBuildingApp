import { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddBuildingDialog, BuildingsTable } from 'components';
import { Building } from 'types';
import buildingsMock from 'mocks/buildingsMock.json';
import styles from './Buildings.module.scss';

export const Buildings = () => {
  const [buildingsData, setBuildingsData] = useState<Array<Building>>();
  const [isAddBuildingDialogOpen, setIsAddBuildingDialogOpen] = useState(false);

  const addBuilding = (building: Building) => {
    buildingsData.push(building);
  };

  useEffect(() => {
    new Promise<Array<Building>>((resolve) =>
      setTimeout(() => resolve(buildingsMock), 500)
    ).then((data) => setBuildingsData(data));
  }, []);

  if (!buildingsData) return <div className={styles.noData}>No data!</div>;

  return (
    <>
      <BuildingsTable buildings={buildingsData} />
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
        addBuilding={addBuilding}
      />
    </>
  );
};
