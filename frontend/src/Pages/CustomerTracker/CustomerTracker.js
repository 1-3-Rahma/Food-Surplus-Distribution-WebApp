import CustomerTrackerMain from "../../Components/CustomerTrackerMain/CustomerTrackerMain";
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function CustomerTracker() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper d-flex justify-content-center align-items-center">
        <CustomerTrackerMain />
      </div>
      <Footer />
    </div>
  );
}

export default CustomerTracker;
