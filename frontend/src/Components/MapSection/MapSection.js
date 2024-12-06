import styles from "./MapSection.module.css";
import map from '../../Assets/map.jpg';

function MapSection () {
  return (
    <div className={styles.mapContainer}>
      <img src={map} alt="Order Location" className={styles.mapImage} />
    </div>
  );
};

export default MapSection;

