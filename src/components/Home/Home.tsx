import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToBuildings = () => {
    navigate('/buildings');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title} onClick={navigateToBuildings}>
        BUILDINGS
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg"
        alt="house"
      />
      <div className={styles.description}>
        A building, or edifice, is a structure with a roof and walls standing
        more or less permanently in one place, such as a house or factory.
        Buildings come in a variety of sizes, shapes, and functions, and have
        been adapted throughout history for a wide number of factors, from
        building materials available, to weather conditions, land prices, ground
        conditions, specific uses, prestige, and aesthetic reasons. To better
        understand the term building compare the list of nonbuilding structures.
      </div>
    </div>
  );
};
