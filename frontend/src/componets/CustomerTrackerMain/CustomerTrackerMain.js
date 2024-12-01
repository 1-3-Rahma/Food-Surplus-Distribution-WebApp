import './CustomerTrackerMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';

    
function CustomerTracker() {
  return (
    <div>
      <h3>Track my order</h3>
        <div class="card tracker">
            <div class="card-body">
                <p class="card-text">
                <h4>order ditails:</h4>
                <br/><br/><br/><br/><br/><br/>
                <h4>Volunteer details:</h4>
                <br/><br/><br/><br/><br/><br/>
                </p>
            </div>
        </div>
    </div>
  );
}

export default CustomerTracker;