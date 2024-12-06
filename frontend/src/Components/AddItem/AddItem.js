import styles from "./AddItem.module.css" ;
import cam from '../../Assets/cam.jpg'
import classNames from 'classnames'
function AddItems () {
    return (
      <div className={styles.container}>
        {/* Add Items Form Section */}
        <main className={styles.main}>
          <h1 className={styles.title}>Add Items</h1>
          <h1 className={styles.text}>Food Photo</h1>
          <form className={styles.form}>
            {/* Food Photo */}
            <div className={styles.photoInput}>
              <input className={styles.custom} type='image' src = {cam} alt="Food photo" width={50} height={50}/>
            </div>
            {/* Food Type */}
            <input type="foodType" placeholder="Food type"/>
            {/* Number of Dishes */}
            <input type="nomOfD" placeholder="Number of Dishes"/>
            {/* Expiration Date */}
            <input type="ExD" placeholder="Expiration date"/>
    
            {/* Save Button */}
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </form>
        </main>
  
      </div>
    );
  };
  
  export default AddItems;