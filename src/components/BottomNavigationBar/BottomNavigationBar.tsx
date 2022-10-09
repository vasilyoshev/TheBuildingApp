import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { selectIsLoggedIn } from 'slices';
import styles from './BottomNavigationBar.module.scss';

export const BottomNavigationBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <BottomNavigation
      showLabels
      classes={{ root: styles.bottomNavigationRoot }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        onClick={() => navigate('/home')}
      />
      {isLoggedIn && (
        <BottomNavigationAction
          label="Buildings"
          icon={<ApartmentIcon />}
          onClick={() => navigate('/buildings')}
        />
      )}
    </BottomNavigation>
  );
};
