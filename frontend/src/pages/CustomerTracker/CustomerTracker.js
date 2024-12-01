import Navbar from "../../components/Navbar/Navbar";
import CustomerTrackerMain from "../../components/CustomerTrackerMain/CustomerTrackerMain";
import FooterPage from "../../components/FooterPage/FooterPage";

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