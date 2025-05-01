import styles from "./AddItem.module.css";
import cam from '../../Assets/cam.jpg'
import { useNavigate } from "react-router-dom";

function AddItems() {
  const navigate = useNavigate();
  const handleAddFood = () => {
    navigate("/Provider"); 
  };
  return (
    <div className={styles.container}>
      {/* Add Items Form Section */}
      <main className={styles.main}>
        <h1 className={styles.title}>Add Items</h1>
        <h1 className={styles.text}>Food Photo</h1>
        
        <form className={styles.form}>
          {/* Food Photo */}
          <div className={styles.photoInput}>
            <input className={styles.custom} type='image' src={cam} alt="Food photo" width={50} height={50} />
          </div>

          {/* Food Type */}
          <input type="text" placeholder="Food type" />
          {/* Number of Dishes */}
          <input type="number" placeholder="Number of Dishes" />
          {/* Expiration Date */}
          <input type="date" placeholder="Expiration date" />

          {/* Save Button */}
          <button type="submit" className={styles.saveButton} onClick={handleAddFood}>
            Save
          </button>
        </form>
      </main>

    </div>
  );
};

export default AddItems;