import { createSlice } from '@reduxjs/toolkit';


  // Get role from localStorage (should be 'provider', 'consumer', or 'volunteer')
  //const role = localStorage.getItem("role");
  //console.log("User Role from localStorage:", role);



const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      console.log("Adding notification:", action.payload); // Add debug log
      state.notifications.unshift({
        id: Date.now(),
        timestamp: new Date().toISOString(),
        read: false,
        target: action.payload.target || 'all',
        recipient: action.payload.recipient || null,
        ...action.payload
      });
      console.log("State after adding:", state.notifications); // Add debug log
    },
    markAsRead: (state, action) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification) {
        notification.read = true;
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, markAsRead, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
