import styles from "./AddItem.module.css";
import cam from '../../Assets/cam.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addOrder } from '../../redux/order';

function AddItems() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    foodType: '',
    dishesCount: '',
    expirationDate: ''
  });

  const handleAddFood = (e) => {
    e.preventDefault();
    
    // Check if image is selected
    if (!selectedImage) {
      alert("Please add an image of the food item");
      return;
    }

    // Create new order object
    const newOrder = {
      id: Date.now(), // Use timestamp as unique ID
      photo: selectedImage,
      foodType: formData.foodType,
      dishesCount: parseInt(formData.dishesCount),
      expirationDate: formData.expirationDate
    };

    // Dispatch action to add new order
    dispatch(addOrder(newOrder));
    
    // Navigate back to provider page
    navigate("/Provider");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.container}>
      {/* Add Items Form Section */}
      <main className={styles.main}>
        <h1 className={styles.title}>Add Items</h1>
        <h1 className={styles.text}>Food Photo</h1>

        <form className={styles.form} onSubmit={handleAddFood}>
          {/* Food Photo */}
          <div className={styles.photoInput}>
            <label htmlFor="food-photo">
              <img 
                src={selectedImage || cam} 
                alt="Upload food photo" 
                width={50} 
                height={50} 
                style={{ cursor: 'pointer' }} 
              />
            </label>
            <input
              id="food-photo"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          {/* Food Type */}
          <input 
            type="text" 
            name="foodType"
            placeholder="Food type" 
            value={formData.foodType}
            onChange={handleInputChange}
            required 
          />

          {/* Number of Dishes */}
          <input 
            type="number" 
            name="dishesCount"
            placeholder="Number of Dishes" 
            min="1" 
            max="100" 
            value={formData.dishesCount}
            onChange={handleInputChange}
            required 
          />

          {/* Expiration Date */}
          <input 
            type="date" 
            name="expirationDate"
            placeholder="Expiration date"   
            min={new Date().toISOString().split('T')[0]} 
            max={new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
            value={formData.expirationDate}
            onChange={handleInputChange}
            required 
          />

          {/* Save Button */}
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddItems;