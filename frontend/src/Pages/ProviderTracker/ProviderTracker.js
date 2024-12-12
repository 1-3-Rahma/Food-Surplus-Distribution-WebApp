import ProviderTrackerMain from "../../Components/ProviderTrackerMain/ProviderTrackerMain";
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function ProviderTracker() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper d-flex justify-content-center align-items-center">
        <ProviderTrackerMain />
      </div>
      <Footer />
    </div>
  );
}

export default ProviderTracker;
