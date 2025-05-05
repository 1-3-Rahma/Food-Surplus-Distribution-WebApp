import './Notifications.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { markAsRead, addNotification } from '../../redux/notification';
import { useEffect, useState } from 'react';


function Notifications() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.notifications);
  const auth = useSelector(state => state.auth);

  const [userRole, setUserRole] = useState("");
  
  // Debug logs
  console.log("Redux auth state:", auth);
  console.log("All notifications from Redux:", notifications);
  console.log("notifications.length:", notifications ? notifications.length : 0);

  useEffect(() => {
    // Get role from auth state first, fallback to localStorage
    const role = auth.role ? auth.role.toLowerCase() : localStorage.getItem("role");
    console.log("User Role:", role);
    setUserRole(role);
  }, [auth]);

  // Debug log for userRole state
  useEffect(() => {
    console.log("userRole state updated:", userRole);
  }, [userRole]);
  
  // Filter notifications based on role and target field
  const filteredNotifications = notifications.filter(n => {
    console.log(`Checking notification:`, n);
    console.log(`n.target (${n.target}) === userRole (${userRole}):`, n.target === userRole);
    console.log(`n.target === 'all':`, n.target === 'all');
    console.log(`n.recipient (${n.recipient}) === auth.user?.email (${auth.user?.email}):`, n.recipient === auth.user?.email);
    
    return n.target === userRole || 
           (n.target === 'all') || 
           (n.recipient && n.recipient === auth.user?.email);
  });

  console.log("Filtered Notifications:", filteredNotifications);

  const unreadCount = filteredNotifications.filter(n => !n.read).length;

  
  const handleNotificationClick = (notification) => {
    // Mark notification as read
    dispatch(markAsRead(notification.id));
    
    // Navigate based on notification type
    switch (notification.type) {
      case 'new_food': //add new food
        if (userRole === 'consumer')navigate("/Consumer");
        break;
      case 'order_request':
        if (userRole === 'volunteer')navigate("/VolunteerOrderDetails");
        break;
      case 'volunteer_update':
        if (userRole === 'consumer')navigate("/CustomerTracker");
        break;
      case 'provider_update': // details of the order for the provider after accepted
        if (userRole === 'provider')navigate("/ProviderTracker");
        break;
      default:
        break;
    }
    console.log("Filtered Notifications:", filteredNotifications);
  };
  notifications.forEach(n => {
    console.log(`Notification ID ${n.id}: target=${n.target}`);
  });
  
  useEffect(() => {
    console.log("All Notifications:", notifications);
    console.log("Filtered Notifications:", filteredNotifications);
  }, [notifications, userRole]);

  // Add a test notification button for debugging
  useEffect(() => {
    // Only add this in development
    if (process.env.NODE_ENV === 'development') {
      console.log("Adding test notification button");
      const testNotification = () => {
        dispatch(addNotification({
          type: 'test',
          message: `Test notification for ${userRole}`,
          target: userRole || 'all'
        }));
      };
      
      // Add to window for console testing
      window.testNotification = testNotification;
    }
  }, [dispatch, userRole]);

  return (
    <div className="container">
     
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="p-3 mb-5">
            <h4 className="m-0">Notifications {unreadCount > 0 && <span className="badge bg-b">{unreadCount}</span>}</h4>
            <div className="card-body">
              <div style={{ height: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
                {filteredNotifications.length === 0 ? (
                <div className="text-center p-3">No notifications</div>
                  ) : (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`notification-card ${!notification.read ? 'unread' : ''}`}
                    >
                      <div>
                        <div className="notification-message">{notification.message}</div>
                        <small className="text-muted">
                          {new Date(notification.timestamp).toLocaleString()}
                        </small>
                      </div>
                      <button onClick={() => handleNotificationClick(notification)}>Read</button>
                    </div>
                  ))
                )
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
