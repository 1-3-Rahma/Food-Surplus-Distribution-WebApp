import './Notifications.css';

function Notifications() {
    
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
                                {[...Array(7)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="notification-card"
                                    >
                                        <div>Order has been requested.</div>
                                        <button>View</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications;