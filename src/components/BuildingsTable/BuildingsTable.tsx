import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Building } from 'types';
import { DeleteBuildingDialog, EditBuildingDialog } from 'components';
import { deleteBuilding, selectBuildings } from 'slices';
import styles from './BuildingsTable.module.scss';

export const BuildingsTable = () => {
  const dispatch = useDispatch();
  const buildings = useSelector(selectBuildings);
  const [selectedBuilding, setSelectedBuilding] = useState<Building>();
  const [isEditBuildingDialogOpen, setIsEditBuildingDialogOpen] =
    useState(false);
  const [isDeleteBuildingDialogOpen, setIsDeleteBuildingDialogOpen] =
    useState(false);

  const openEditDialog = (building: Building) => {
    setSelectedBuilding(building);
    setIsEditBuildingDialogOpen(true);
  };

  const closeEditDialog = () => {
    setSelectedBuilding(undefined);
    setIsEditBuildingDialogOpen(false);
  };

  const openDeleteDialog = (building: Building) => {
    setSelectedBuilding(building);
    setIsDeleteBuildingDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setSelectedBuilding(undefined);
    setIsDeleteBuildingDialogOpen(false);
  };

  const deleteSelectedBuilding = () => {
    dispatch(deleteBuilding(selectedBuilding));
  };

  return (
    <>
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
                  onClick={() => openEditDialog(building)}
                  classes={{ root: styles.editBuildingFabRoot }}
                >
                  <EditIcon />
                </Fab>
                <Fab size="small" onClick={() => openDeleteDialog(building)}>
                  <DeleteIcon />
                </Fab>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBuilding && (
        <>
          <EditBuildingDialog
            isOpen={isEditBuildingDialogOpen}
            close={closeEditDialog}
            building={selectedBuilding}
          />
          <DeleteBuildingDialog
            isOpen={isDeleteBuildingDialogOpen}
            close={closeDeleteDialog}
            buildingId={selectedBuilding.id}
            confirm={deleteSelectedBuilding}
          />
        </>
      )}
    </>
  );
};
