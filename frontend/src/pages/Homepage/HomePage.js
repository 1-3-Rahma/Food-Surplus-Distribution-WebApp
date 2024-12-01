import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";
import HomeMainPagebody from "../../components/HomeMain/Home";
import FooterPage from "../../components/FooterPage/FooterPage";

function Homepage() {
    return (
      <div>
        <HomeNavbar></HomeNavbar>
        <HomeMainPagebody></HomeMainPagebody>
        <FooterPage></FooterPage>
      </div>
      
    );
  }
  
export default Homepage;
  
