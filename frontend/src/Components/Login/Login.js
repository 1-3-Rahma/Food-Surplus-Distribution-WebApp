import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/logo.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.email === email);

        if (!email) {
            setError("Please enter your email.");
            return;
        }

        if (!password) {
            setError("Please enter your password.");
            return;
        }

        if (!user) {
            setError("Incorrect email. Please try again.");
            return;
        }

        if (user.password !== password) {
            setError("Incorrect password. Please try again.");
            return;
        }

        // Redirect based on userType
        if (user.userType === "Consumer") navigate('/Consumer');
        else if (user.userType === "Provider") navigate('/Provider');
        else if (user.userType === "Volunteer") navigate('/Volunteer');
        else navigate('/');
    };

    return (
        <div>
            <div className='logo'>
                <Link to="/">
                    <img src={Logo} alt="Meal-Aid Logo" className="m-3" />
                </Link>
            </div>

            <div className="container d-flex justify-content-center align-items-center">
                <div style={{ width: '600px' }}>
                    <div className="text-center form-header">
                        <h2 className="m-2">Login to MealAid</h2>
                        <p className="mb-5">Sharing Food, Spreading Hope - With MealAid</p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control text-start"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control text-start"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <small className="text-danger">{error}</small>}

                        <button type="submit" className="login-button w-100 my-3">Login</button>
                    </form>

                    <p className="text-center my-2">
                        Don't have an account? <Link to="/SignUp" style={{ color: '#AF8260', fontWeight: 500 }}>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;