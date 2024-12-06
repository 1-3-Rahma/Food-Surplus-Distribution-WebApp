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
              <h4>Order ditails:</h4>
              <br /><br /><br /><br /><br /><br />
              <h4>Volunteer details:</h4>
              <br /><br /><br /><br /><br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerTrackerMain;