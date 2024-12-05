import Navbar from "../../components/Navbar/Navbar";
import CustomerTrackerMain from "../../components/CustomerTrackerMain/CustomerTrackerMain";
import FooterPage from "../../components/FooterPage/FooterPage";

function CustomerTracker() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper d-flex justify-content-center align-items-center">
        <CustomerTrackerMain/>
      </div>
      <FooterPage />
    </div>
  );
}

export default CustomerTracker;
