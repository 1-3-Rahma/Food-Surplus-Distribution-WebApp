import './Navbar.css';
import logo from '../../Assets/logo.png';
import logout from '../../Assets/logout.png';
import notification from '../../Assets/Notification.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg nav ">
            <div class="container-fluid ">
              <a class="logo" href="#">
                <img src={logo} width = "70" height = "70" />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navtext">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                    <img src={notification} width = "40" height = "40" class ="navimg" />Notifcation</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link " href="#">
                      <img src={logout} width = "30" height = "30" class ="navimg" />Logout</a>
                  </li>
                  
                  
                </ul>

              </div>
            </div>
          </nav>
    </header>
    </div>
  );
}

export default Navbar;