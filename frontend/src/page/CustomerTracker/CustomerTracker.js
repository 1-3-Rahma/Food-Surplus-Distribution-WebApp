import Navbar from "../../componets/Navbar/Navbar";
import CustomerTrackerMain from "../../componets/CustomerTrackerMain/CustomerTrackerMain";
import FooterPage from "../../componets/FooterPage/FooterPage";

function ProviderTaker() {
    return (
      <div>
        <Navbar></Navbar>
        <CustomerTrackerMain></CustomerTrackerMain>
        <FooterPage></FooterPage>
      </div>
      
    );
  }
  
export default ProviderTaker;