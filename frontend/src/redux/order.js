import { createSlice } from '@reduxjs/toolkit';
import food from '../Assets/food.png';
import { deleteNotificationByOrderId } from './notification';


// Helper function to check if orders are from the same day
const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const initialState = {
  availableOrders: [],
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
      // Add to available orders with initial status
      const newOrder = {
        ...action.payload,
        status: 'Available',
        orderTime: new Date().toISOString()
      };
      state.availableOrders.push(newOrder);
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
        
        // Add to your orders with consumer info and initial status
        const newOrder = {
          ...order,
          consumerId,
          consumerName,
          consumerEmail,
          consumerAddress,
          orderTime: new Date().toISOString(),
          status: 'Pending',
          isCancelable: true,
          willAppearInProvider: true // Flag to track if order should appear in provider's section
        };
        state.yourOrders.push(newOrder);

        // Clear error if orders are now less than 3
        if (state.yourOrders.length < 3) {
          state.error = null;
        }
      }
    },
    updateOrderCancelableStatus: (state, action) => {
      const { orderId, isCancelable } = action.payload;
      const orderIndex = state.yourOrders.findIndex(order => order.id === orderId);
      if (orderIndex >= 0) {
        state.yourOrders[orderIndex].isCancelable = isCancelable;
        
        // If the cancel button is about to disappear (isCancelable is false)
        // and the order should appear in provider's section
        if (!isCancelable) {
          const order = state.yourOrders[orderIndex];
          // Add to provider's ordered section with canceled status
          state.availableOrders.push({
            ...order,
            status: 'Canceled',
            cancelTime: new Date().toISOString(),
            previousConsumer: {
              name: order.consumerName,
              email: order.consumerEmail,
              address: order.consumerAddress
            },
            orderId: orderId // Keep the same orderId for tracking
          });
          
          // Remove from consumer's orders
          state.yourOrders.splice(orderIndex, 1);
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
        const { consumerId, consumerName, consumerEmail, consumerAddress, status, isCancelable, ...basicOrder } = order;
        
        // Remove from consumer's orders immediately
        state.yourOrders.splice(orderIndex, 1);
        
        // Add to provider's available orders section with canceled status immediately
        state.availableOrders.push({
          ...basicOrder,
          photo: order.photo,
          orderTime: order.orderTime, // Keep the original order time
          status: 'Canceled',
          cancelTime: new Date().toISOString(),
          previousConsumer: {
            name: consumerName,
            email: consumerEmail,
            address: consumerAddress
          }
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
  updateOrderCancelableStatus,
  clearError
} = orderSlice.actions;

export default orderSlice.reducer;