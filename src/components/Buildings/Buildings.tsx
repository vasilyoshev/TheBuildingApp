import { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BuildingsTable } from 'components';
import { Building } from 'types';
import buildingsMock from 'mocks/buildingsMock.json';
import styles from './Buildings.module.scss';

export const Buildings = () => {
  const [buildingsData, setBuildingsData] = useState<Array<Building>>();

  const addNewBuilding = () => {
    console.log('Add table');
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
        onClick={addNewBuilding}
      >
        <AddIcon />
      </Fab>
    </>
  );
};
