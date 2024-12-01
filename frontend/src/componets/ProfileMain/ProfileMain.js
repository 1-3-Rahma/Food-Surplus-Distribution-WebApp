import './ProfileMain.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import foodPackeg from "../../Assets/food-packaging-ideas.png";
    
function HomeMain() {
  return (
    <div>
      
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <form>
              <div class="row mb-3 align-items-center">
                <label for="exampleInputName" class="col-sm-3 col-form-label">Name</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="exampleInputName" aria-describedby=""/>
                </div>
              </div>

              <div class="row mb-3 align-items-center">
                <label for="exampleInputEmail1" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              
              <div class="row mb-3 align-items-center">
                <label for="exampleInputPassword1" class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-9">
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
              </div>

              <div class="row mb-3 align-items-center">
                <label for="exampleInputAddress" class="col-sm-3 col-form-label">Address</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="exampleInputAddress" aria-describedby=""/>
                </div>
              </div>

              <div class="row mb-3 align-items-center">
                <label for="exampleInputPhone" class="col-sm-3 col-form-label">Phone Number</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="exampleInputPhone" aria-describedby=""/>
                </div>
              </div>
              
              
              <button type="submit" class="btn ">Edit</button>
            </form>
          </div>
          <div class="col">
            <h3 class ="history">History</h3>
            <div class="card-container-v">
              <div class="card align-items-center">
                  <img src={foodPackeg} class="card-img-top imgCard" alt="..."/>
                  <div class="card-body">
                  <p class="card-text">food servery in a good packaging </p>
                  </div>
              </div>
              <div class="card">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <p class="card-text"></p>
                  </div>
              </div>
              <div class="card">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <p class="card-text"></p>
                  </div>
              </div>
              <div class="card" >
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                  <p class="card-text"></p>
                  </div>
              </div>
              <div class="card">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <p class="card-text"></p>
                  </div>
              </div>
              <div class="card">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                  <p class="card-text"></p>
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