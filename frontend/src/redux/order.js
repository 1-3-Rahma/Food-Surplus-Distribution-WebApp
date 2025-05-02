import { createSlice } from '@reduxjs/toolkit';
import food from '../Assets/food.png';

// Helper function to check if orders are from the same day
const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const initialState = {
  availableOrders: [
    { id: 1, photo: food, foodType: "Salad Dish", dishesCount: 2 },
  ],
  yourOrders: [],
  selectedOrder: null,
  error: null
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setAvailableOrders: (state, action) => {
      state.availableOrders = action.payload;
    },
    setYourOrders: (state, action) => {
      state.yourOrders = action.payload;
    },
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    addOrder: (state, action) => {
      state.availableOrders.push(action.payload);
    },
    moveToOrdered: (state, action) => {
      const { orderId, consumerId, consumerName, consumerEmail, consumerAddress } = action.payload;
      
      // Check daily order limit
      const today = new Date();
      const todayOrders = state.yourOrders.filter(order => {
        const orderDate = new Date(order.orderTime);
        return isSameDay(orderDate, today);
      });

      if (todayOrders.length >= 3) {
        state.error = "You can only have 3 orders at a day.";
        return;
      }

      // Find the order in available orders
      const orderIndex = state.availableOrders.findIndex(order => order.id === orderId);
      if (orderIndex >= 0) {
        // Remove from available orders
        const order = state.availableOrders[orderIndex];
        state.availableOrders.splice(orderIndex, 1);
        // Add to your orders with consumer info
        state.yourOrders.push({
          ...order,
          consumerId,
          consumerName,
          consumerEmail,
          consumerAddress,
          orderTime: new Date().toISOString(),
          status: 'Pending'
        });
        // Clear error if orders are now less than 3
        if (state.yourOrders.length < 3) {
          state.error = null;
        }
      }
    },
    cancelOrder: (state, action) => {
      const { orderId } = action.payload;
      // Find the order in your orders
      const orderIndex = state.yourOrders.findIndex(order => order.id === orderId);
      if (orderIndex >= 0) {
        // Remove consumer info and move back to available orders
        const order = state.yourOrders[orderIndex];
        const { consumerId, consumerName, consumerEmail, consumerAddress, orderTime, status, ...basicOrder } = order;
        state.yourOrders.splice(orderIndex, 1);
        // Preserve the original order data including photo
        state.availableOrders.push({
          ...basicOrder,
          photo: order.photo
        });
        
        // Clear error if orders are now less than 3
        const today = new Date();
        const todayOrders = state.yourOrders.filter(order => {
          const orderDate = new Date(order.orderTime);
          return isSameDay(orderDate, today);
        });
        
        if (todayOrders.length < 3) {
          state.error = null;
        }
      }
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const orderIndex = state.yourOrders.findIndex(order => order.id === orderId);
      if (orderIndex >= 0) {
        state.yourOrders[orderIndex].status = status;
      }
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export const { 
  setAvailableOrders, 
  setYourOrders, 
  setSelectedOrder, 
  addOrder, 
  moveToOrdered, 
  cancelOrder, 
  updateOrderStatus,
  clearError
} = orderSlice.actions;

export default orderSlice.reducer;