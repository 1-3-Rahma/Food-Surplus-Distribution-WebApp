import './FooterPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FooterPage() {
  return (
    <div id="footer-container">
      {/* Main content placeholder */}
      <div id="content-wrapper">
       
      </div>

      {/* Footer */}
      <footer>
        <div className="row" id="contact">
          <div className="col-sm-8 p-3 text-dark">
            <p id="contactUs">CONTACT US</p>
            <div className="email-row">
              <a href="mailto:rahmaali.ra9@gmail.com" className="email-link">
                rahmaali.ra9@gmail.com
              </a>
              <a href="mailto:rehamasem442@gmail.com" className="email-link">
                rehamasem442@gmail.com
              </a>
            </div>
            <div className="email-row">
              <a href="mailto:roaaemam948@gmail.com" className="email-link">
                roaaemam948@gmail.com
              </a>
              <a href="mailto:salma.akafarag162@gmail.com" className="email-link">
                salma.akafarag162@gmail.com
              </a>
            </div>
          </div>

          <div className="col-sm-4 p-3 text-dark">
            <p id="mealAid">Meal Aid</p>
            <p id="links">
              <span className="NormalSignUp">Sign up</span>{' '}
              | Login
            </p>
            <p className='rights'>@All rights reserved to MEAL-AID</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;
