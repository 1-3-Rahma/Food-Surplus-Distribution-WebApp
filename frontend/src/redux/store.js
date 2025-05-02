import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import orderReducer from './order';
import notificationReducer from './notification';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Handle errors here
    console.error('Error saving state:', err);
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: orderReducer,
    notifications: notificationReducer,
  },
  preloadedState: loadState(),
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;