import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  availableOrders: [],
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
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const orderIndex = state.yourOrders.findIndex(order => order.id === orderId);
      if (orderIndex >= 0) {
        state.yourOrders[orderIndex].status = status;
      }
    },
  },
});

export const { setAvailableOrders, setYourOrders, setSelectedOrder, addOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;