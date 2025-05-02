import './Notifications.css';
import { useNavigate } from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();
  const handleCustomerClick = () => {
    navigate("/CustomerTracker"); 
  };
  const handleProviderClick = () => {
    navigate("/ProviderTracker"); 
  };
  const handleVolunteerClick = () => {
    navigate("/VolunteerOrderDetails"); 
  };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="p-3 mb-5">
                        <h4 className="m-0">Notifications</h4>
                        <div className="card-body">
                            {/* Scrollable container */}
                            <div style={{ height: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
                                {/* Notification cards */}
                               
                                    <div
                                        className="notification-card"
                                    >
                                        <div>Order has been requested.</div>
                                        <button onClick={handleProviderClick}>View</button>
                                    </div>
                                    <div
                                        className="notification-card"
                                    >
                                        <div>Order has been requested.</div>
                                        <button onClick={handleCustomerClick}>View</button>
                                    </div>
                                    <div
                                        className="notification-card"
                                    >
                                        <div>Order has been requested.</div>
                                        <button onClick={handleVolunteerClick}>View</button>
                                    </div>
                                    <div
                                        className="notification-card"
                                    >
                                        <div>Order has been requested.</div>
                                        <button>View</button>
                                    </div>
                                    <div
                                        className="notification-card"
                                    >
                                        <div>Order has been requested.</div>
                                        <button>View</button>
                                    </div>
                                    <div
                                        className="notification-card"
                                    >
                                        <div>Order has been requested.</div>
                                        <button>View</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;