import './ProviderTrackerMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProviderTrackerMain.css';

function ProviderTracker() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="text-center center-content">
        <h3 className='hp'>Order has been accepted</h3>
        <div className="card tracker">
          <div className="card-body">
            <p className="card-text">
              <h4 className='hpro'>Volunteer details:</h4>
              <br /><br /><br /><br /><br /><br />
              <h4 className='hpr'>Order details:</h4>
              <br /><br /><br /><br /><br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderTracker;
