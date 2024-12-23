import './CustomerTrackerMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomerTrackerMain() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="text-center center-content">
        <h3 className='hc'>Track my order</h3>
        <div className="card tracker">
          <div className="card-body">
            <p className="card-text">
              <h4>Order details:</h4>
              <h5>
                Order Type: Pizza<br />
                Quantity: 10 servings<br />
                Pickup Location: Cairo, Nasr City, Street 10, Building 5<br />
                Expiration Date: 24th December 2024, 6:00 PM<br />
                <br />
                This order includes freshly prepared pizza, suitable for immediate consumption. Please ensure pickup before the expiration date to maintain quality.

              </h5>

              <h4>Volunteer details:</h4>
              <h5>
              Volunteer Name: Ahmed Hassan<br />
Contact Number: 01012345678<br />
City: Cairo<br />
Delivery Route: Nasr City → Maadi <br />
Current Status: Order Accepted<br />
<br />
Ahmed Hassan is assigned to deliver the order. He is experienced in timely food deliveries and will ensure the order reaches the customer efficiently.
<br />
              </h5>
           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerTrackerMain;