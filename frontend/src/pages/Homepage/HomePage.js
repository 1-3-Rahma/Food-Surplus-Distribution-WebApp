import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import HomeMain from "../../components/HomeMain/Home";
import FooterPage from "../../components/FooterPage/FooterPage";
import './HomePage.css';

function Homepage() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <HomeNavbar />
        <HomeMain/>
      </div>
      <FooterPage />
    </div>
  );
}

export default Homepage;
