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
    clearNotifications: (state, action) => {
      const userRole = action.payload?.role;
      const userEmail = action.payload?.email;
      
      if (userRole || userEmail) {
        // Only remove notifications that match ALL of these criteria:
        // 1. Targeted at this user's role OR targeted at 'all' OR specifically for this user's email
        state.notifications = state.notifications.filter(n => {
          const isForThisUser = 
            (n.target === userRole) || 
            (n.target === 'all') || 
            (n.recipient === userEmail);
          
          // Keep notifications that are NOT for this user
          return !isForThisUser;
        });
      } else {
        // Clear all notifications if no role/email specified
        state.notifications = [];
      }
    },
  },
});

export const { addNotification, markAsRead, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
