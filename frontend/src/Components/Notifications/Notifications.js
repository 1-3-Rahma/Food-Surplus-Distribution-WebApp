import './Notifications.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { markAsRead } from '../../redux/notification';

function Notifications() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.notifications);
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNotificationClick = (notification) => {
    // Mark notification as read
    dispatch(markAsRead(notification.id));
    
    // Navigate based on notification type
    switch (notification.type) {
      case 'new_food':
        navigate("/Consumer");
        break;
      case 'order_request':
        navigate("/CustomerTracker");
        break;
      case 'provider_update':
        navigate("/ProviderTracker");
        break;
      case 'volunteer_update':
        navigate("/VolunteerOrderDetails");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="p-3 mb-5">
            <h4 className="m-0">Notifications {unreadCount > 0 && <span className="badge bg-b">{unreadCount}</span>}</h4>
            <div className="card-body">
              <div style={{ height: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
                {notifications.length === 0 ? (
                  <div className="text-center p-3">No notifications</div>
                ) : (
                  notifications.map((notification) => (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;