import { createSlice } from '@reduxjs/toolkit';
import food from '../Assets/food.png';

const initialState = {
  availableOrders: [
    { id: 1, photo: food, foodType: "Salad Dish", dishesCount: 2 },
  ],
  yourOrders: [],
  selectedOrder: null,
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
        state.availableOrders.push(basicOrder);
      }
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const orderIndex = state.yourOrders.findIndex(order => order.id === orderId);
      if (orderIndex >= 0) {
        state.yourOrders[orderIndex].status = status;
      }
    },
  },
});

export const { 
  setAvailableOrders, 
  setYourOrders, 
  setSelectedOrder, 
  addOrder, 
  moveToOrdered, 
  cancelOrder, 
  updateOrderStatus 
} = orderSlice.actions;

export default orderSlice.reducer;