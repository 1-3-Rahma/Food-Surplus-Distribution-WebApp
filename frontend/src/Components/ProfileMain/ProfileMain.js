import './ProfileMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import foodPackeg from "../../Assets/food-packaging-ideas.png";
    
function HomeMain() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 col-12 sp">
            <form className="size">
              <div className="row mb-3 align-items-center">
                <label htmlFor="exampleInputName" className="col-sm-3 col-form-label">Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="exampleInputName" />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="exampleInputEmail1" className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" id="exampleInputEmail1" />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="exampleInputPassword1" className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="exampleInputAddress" className="col-sm-3 col-form-label">Address</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="exampleInputAddress" />
                </div>
              </div>

              <div className="row mb-3 align-items-center">
                <label htmlFor="exampleInputPhone" className="col-sm-3 col-form-label">Phone Number</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="exampleInputPhone" />
                </div>
              </div>

              <button type="submit" className="btn">Edit</button>
            </form>
          </div>

          <div className="col-md-6 col-12">
            <h3 className="history">History</h3>
            <div className="card-container-v">
              <div className="card align-item-center">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
              <div className="card">
                <img src={foodPackeg} className="card-img-top imgCard" alt="..." />
                <div className="card-body">
                  <p className="card-text">Food serving in good packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
