import { createSlice } from '@reduxjs/toolkit';

// Load initial user data from localStorage
const loadUserData = () => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserEmail = localStorage.getItem("currentUserEmail");
    if (currentUserEmail) {
      const user = users.find(u => u.email === currentUserEmail);
      if (user) {
        return {
          user: user,
          isAuthenticated: true,
          role: user.userType
        };
      }
    }
  } catch (err) {
    console.error('Error loading user data:', err);
  }
  return {
    user: null,
    isAuthenticated: false,
    role: null
  };
};

const initialState = loadUserData();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.role = action.payload.role;
      // Save current user email to localStorage
      localStorage.setItem("currentUserEmail", action.payload.user.email);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
      // Remove current user email from localStorage
      localStorage.removeItem("currentUserEmail");
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      // Update user in localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map(user => {
        if (user.email === state.user.email) {
          return { ...user, ...action.payload };
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;