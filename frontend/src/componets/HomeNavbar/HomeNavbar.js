import './HomeNavbar.css';
import logo from '../../Assets/logo-trans.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeNavbar() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg nav ">
            <div class="container-fluid ">
                <a class="logo" href="#">
                  <img src={logo} alt="Logo" width="70" height="70" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navtext">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#">Highlight</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Sign up</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Login</a>
                    </li>
                    
                  </ul>

              </div>
             </div>
          </nav>
      </header>
    </div>
  );
}

export default HomeNavbar;