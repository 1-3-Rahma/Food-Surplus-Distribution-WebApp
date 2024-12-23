// export default MapSection;
import React from 'react';
import styles from "./MapSection.module.css";
import map from '../../Assets/map.jpg'; // Assuming you still need this import for some reason

function MapSection() {
  return (
    <div className={styles.container}>
      {/* If you still need to use the static map image, uncomment the line below */}
      {/* <img src={map} alt="Order Location" className={styles.mapImage} /> */}
      <div className={styles.mapContainer}>
        <iframe
          width="700"
          height="700"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=egypt+(egypt)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        >
        </iframe>
      </div>
    </div>
  );
}

export default MapSection;
