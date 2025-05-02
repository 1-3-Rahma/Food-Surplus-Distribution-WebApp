import './ProfileMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import foodPackeg from "../../Assets/food-packaging-ideas.png";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth';
    
function ProfileMain() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  
  // Get the current user from Redux
  const currentUser = useSelector(state => state.auth.user);
  
  // Initialize userInfo with current user data
  const [userInfo, setUserInfo] = useState(() => {
    if (currentUser) {
      return {
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        address: currentUser.address || '',
        phoneNumber: currentUser.phoneNumber || '',
        city: currentUser.city || '',
        userType: currentUser.userType || ''
      };
    }
    return {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      phoneNumber: '',
      city: '',
      userType: ''
    };
  });

  const [originalUserInfo, setOriginalUserInfo] = useState(null);

  // Update userInfo when currentUser changes
  useEffect(() => {
    if (currentUser) {
      const userData = {
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
        address: currentUser.address || '',
        phoneNumber: currentUser.phoneNumber || '',
        city: currentUser.city || '',
        userType: currentUser.userType || ''
      };
      setUserInfo(userData);
      setOriginalUserInfo(userData);
    }
  }, [currentUser]);

  const handleEditClick = () => {
    setOriginalUserInfo({...userInfo});
    setIsEditing(true);
  };

  const handleCancel = () => {
    if (originalUserInfo) {
      setUserInfo({...originalUserInfo});
    }
    setIsEditing(false);
  };

  const handleSave = () => {
    // Update user data in Redux
    const updatedUserData = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      address: userInfo.address,
      phoneNumber: userInfo.phoneNumber,
      city: userInfo.city
    };
    
    dispatch(updateUser(updatedUserData));
    setOriginalUserInfo({...userInfo});
    alert('Data updated successfully');
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // If no user data is available, show a message
  if (!currentUser) {
    return <div className="container text-center mt-5">Please log in to view your profile.</div>;
  }

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 col-12 sp">
            {!isEditing ? (
              <div className="size">
                <div className="row mb-3 align-items-center">
                  <label className="col-sm-3 col-form-label">Name</label>
                  <div className="col-sm-9">
                    <p className="form-control-static">{userInfo.firstName} {userInfo.lastName}</p>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <p className="form-control-static">{userInfo.email}</p>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-sm-3 col-form-label">Address</label>
                  <div className="col-sm-9">
                    <p className="form-control-static">{userInfo.address}</p>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-sm-3 col-form-label">Phone Number</label>
                  <div className="col-sm-9">
                    <p className="form-control-static">{userInfo.phoneNumber}</p>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-sm-3 col-form-label">City</label>
                  <div className="col-sm-9">
                    <p className="form-control-static">{userInfo.city}</p>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label className="col-sm-3 col-form-label">User Type</label>
                  <div className="col-sm-9">
                    <p className="form-control-static">{userInfo.userType}</p>
                  </div>
                </div>

                <button className="btn" onClick={handleEditClick}>Edit Profile</button>
              </div>
            ) : (
              <form className="size">
                <div className="row mb-3 align-items-center">
                  <label className="col-sm-3 col-form-label">Name</label>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-6">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="firstName" 
                          value={userInfo.firstName} 
                          onChange={handleInputChange} 
                          placeholder="First Name"
                          required 
                        />
                      </div>
                      <div className="col-6">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="lastName" 
                          value={userInfo.lastName} 
                          onChange={handleInputChange} 
                          placeholder="Last Name"
                          required 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="email" value={userInfo.email} disabled />
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label htmlFor="address" className="col-sm-3 col-form-label">Address</label>
                  <div className="col-sm-9">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="address" 
                      value={userInfo.address} 
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">Phone Number</label>
                  <div className="col-sm-9">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="phoneNumber" 
                      value={userInfo.phoneNumber} 
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label htmlFor="city" className="col-sm-3 col-form-label">City</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="city"
                      value={userInfo.city}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Cairo">Cairo</option>
                      <option value="Alexandria">Alexandria</option>
                      <option value="Giza">Giza</option>
                      <option value="Suez">Suez</option>
                      <option value="Port Said">Port Said</option>
                      <option value="Luxor">Luxor</option>
                      <option value="Aswan">Aswan</option>
                      <option value="Hurghada">Hurghada</option>
                      <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
                      <option value="Dahab">Dahab</option>
                      <option value="Qalyubia">Qalyubia</option>
                      <option value="Assiut">Assiut</option>
                      <option value="Beheira">Beheira</option>
                      <option value="Beni Suef">Beni Suef</option>
                      <option value="Dakahlia">Dakahlia</option>
                      <option value="Fayoum">Fayoum</option>
                      <option value="Gharbia">Gharbia</option>
                      <option value="Ismailia">Ismailia</option>
                      <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
                      <option value="Minya">Minya</option>
                      <option value="Menofia">Menofia</option>
                      <option value="New Valley">New Valley</option>
                      <option value="North Sinai">North Sinai</option>
                      <option value="South Sinai">South Sinai</option>
                      <option value="Qena">Qena</option>
                      <option value="Red Sea">Red Sea</option>
                      <option value="Al-Sharqia">Al-Sharqia</option>
                      <option value="Soha">Soha</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3 align-items-center">
                  <label htmlFor="userType" className="col-sm-3 col-form-label">User Type</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="userType" value={userInfo.userType} disabled />
                  </div>
                </div>

                <button type="button" className="btn" onClick={handleSave}>Save</button>
                <button type="button" className="btn ms-2" onClick={handleCancel}>Cancel</button>
              </form>
            )}
          </div>

          <div className="col-md-6 col-12">
            <h3 className="history">History</h3>
            <div className="card-container-v">
              <div className="card align-item-center">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;