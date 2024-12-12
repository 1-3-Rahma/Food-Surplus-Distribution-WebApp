import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import Logo from "../../Assets/logo.png";

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        city: "",
        address: "",
        userType: "",
        photo: null,
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName || !/^[A-Za-z\s]+$/.test(formData.firstName)) {
            newErrors.firstName = "First name should only contain letters and spaces.";
        }

        if (formData.firstName.length < 3) {
            newErrors.firstName = "First name should be more than 2 letters.";
        }

        if (formData.lastName.length < 3) {
            newErrors.lastName = "Last name should be more than 2 letters.";
        }

        if (!formData.lastName || !/^[A-Za-z\s]+$/.test(formData.lastName)) {
            newErrors.lastName = "Last name should only contain letters and spaces.";
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (formData.password.length < 6) {
            newErrors.password = "Password should be at least 6 characters.";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (!formData.phoneNumber || formData.phoneNumber.length < 6 || !/^\d+$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Enter a valid phone number with at least 6 digits.";
        }

        if (!formData.userType) {
            newErrors.userType = "Please select a user type.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Save user data to localStorage for mockup purposes
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(formData);
            localStorage.setItem("users", JSON.stringify(users));

            // Redirect to login
            navigate('/Login');
        }
    };

    return (
        <div className="SignUp">
            <div className='logo'>
                <Link to="/">
                    <img src={Logo} alt="Meal-Aid Logo" className="m-3" />
                </Link>
            </div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row" style={{ width: '600px' }}>
                    <div className="text-center form-header">
                        <h2 className="mb-2">Sign Up to MealAid</h2>
                        <p className="mb-5">Sharing Food, Spreading Hope - With MealAid</p>
                    </div>

                    <form onSubmit={handleSignUp}>
                        {["firstName", "lastName", "email", "password", "confirmPassword", "phoneNumber", "address"].map((field, index) => (
                            <div className="form-group" key={index}>
                                <label htmlFor={field}>
                                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} *
                                </label>
                                <input
                                    type={field === "password" || field === "confirmPassword" ? "password" : "text"}
                                    className="form-control text-start"
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={field === "address" ? "123 Main Street, city" : ""}
                                    required
                                />
                                {errors[field] && <small className="text-danger">{errors[field]}</small>}
                            </div>
                        ))}

                        <div className="form-group">
                            <label htmlFor="city">City *</label>
                            <select
                                className="form-control"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
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
                                <option value="Matrouh">Matrouh</option>
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

                        <div className="form-group">
                            <label htmlFor="userType">User Type *</label>
                            <select
                                className="form-control"
                                id="userType"
                                name="userType"
                                value={formData.userType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select User Type</option>
                                <option value="Consumer">Consumer</option>
                                <option value="Provider">Provider</option>
                                <option value="Volunteer">Volunteer</option>
                            </select>
                            {errors.userType && <small className="text-danger">{errors.userType}</small>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="photo">Upload your Profile Picture *</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo"
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        <button type="submit" className="w-100 my-2">
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center mb-5">
                        Already have an account? <Link to="/Login" style={{ color: '#AF8260', fontWeight: 500 }}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;