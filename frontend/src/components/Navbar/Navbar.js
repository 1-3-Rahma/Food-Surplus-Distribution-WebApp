import logo from '../../Assets/logo.png';
import logout from '../../Assets/logout.png';
import notification from '../../Assets/Notification.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
      
        <nav class="navbar navbar-expand-lg nav ">
            <div class="container-fluid ">
              <a class="logo" href="#">
                <img src={logo} width = "80" height = "80" />
              </a>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        {/* Notification */}
        <li className="nav-item">
          <a className="nav-link " href="#">
            <img
              src={notification}
              alt="Notification"
              width="35"
              height="35"
              className="navimg me-1 mt-2 "
            />
           Notification
          </a>
        </li>

        {/* Logout */}
        <li className="nav-item">
          <a className="nav-link " href="#">
            <img
              src={logout}
              alt="Logout"
              width="25"
              height="25"
              className="navimg me-1 mt-2"
            />
            Logout
          </a>
        </li>
      </ul>
              </div>
            
          </nav>
    </div>
  );
}

export default Navbar;