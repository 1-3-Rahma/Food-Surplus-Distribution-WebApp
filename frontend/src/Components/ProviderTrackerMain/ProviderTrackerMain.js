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
              <h5>Name: Ahmed Ali <br/>
                Phone Number: 01012345678 <br/>
                Email: ahmed.ali@example.com <br/>
                City: Cairo <br/>
                Address: 123 Street, Nasr City, Cairo</h5>
                            
              <h4 className='hpr'>Order details:</h4>
              <h5>
                Order ID: 456123<br />
                Food Type: Cooked Meals<br />
                Quantity: 10 servings<br />
                Expiration Date: 2024-12-25<br />
                Provider Name: Rahma Ali<br />
                Provider Address: 45 El-Tahrir St, Dokki, Giza <br />
                Order Status: In Progress<br />
              </h5>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderTracker;
