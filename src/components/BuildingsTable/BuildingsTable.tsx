import { Fab } from '@mui/material';
import { FC } from 'react';
import { Building } from 'types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './BuildingsTable.module.scss';

interface BuildingsTableProps {
  buildings: Array<Building>;
}
export const BuildingsTable: FC<BuildingsTableProps> = ({ buildings }) => {
  const editBuilding = (building: Building) => {
    console.log('Edit ' + building.name);
  };

  const deleteBuilding = (building: Building) => {
    console.log('Delete ' + building.name);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Area</th>
          <th>Location</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {buildings.map((building) => (
          <tr key={building.id}>
            <td>{building.id}</td>
            <td>{building.name}</td>
            <td>{building.area}</td>
            <td>{building.location}</td>
            <td>
              <img src={building.image} alt="building" />
            </td>
            <td>
              <Fab
                size="small"
                onClick={() => editBuilding(building)}
                classes={{ root: styles.editBuildingFabRoot }}
              >
                <EditIcon />
              </Fab>
              <Fab size="small" onClick={() => deleteBuilding(building)}>
                <DeleteIcon />
              </Fab>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
