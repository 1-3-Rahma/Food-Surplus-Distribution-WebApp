import HomeNavbar from "../../componets/HomeNavbar/HomeNavbar";
import HomeMainPagebody from "../../componets/HomeMain/Home";
import FooterPage from "../../componets/FooterPage/FooterPage";

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
  
