import HomeNavbar from "../../Components/HomeNavbar/HomeNavbar";
import HomeMain from "../../Components/HomeMain/Home";
import './HomePage.css';
import Footer from '../../Components/Footer/Footer'

function Homepage() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <HomeNavbar />
        <HomeMain />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
