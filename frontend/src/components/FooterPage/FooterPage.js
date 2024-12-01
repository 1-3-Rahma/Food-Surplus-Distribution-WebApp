import './FooterPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FooterPage() {
  return (
    <div>
      <footer >
        <div class ="row" id="contact">
            <div class="col-sm-8 p-3 text-dark">
                <p id ="contactUs">CONTACT US</p> 
                <p><a href="mailto:rahmaali.ra9@gmail.com" class ="rahma">rahmaali.ra9@gmail.com</a> <a href="mailto:rehamasem442@gmail.com">rehamasem442@gmail.com</a></p>
                <p><a href="mailto:roaaemam948@gmail.com">roaaemam948@gmail.com</a><a href="mailto:salma.akafarag162@gmail.com">salma.akafarag162@gmail.com</a></p>
            </div>
            <div class="col-sm-4 p-3 text-dark">
                <p id="mealAid">Meal Aid</p>
                <p id="links">About | Highlight | <span class="NormalSignUp">Sign up</span> | Login</p>
                <p>@All rights reserved to MEAL-AID</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;