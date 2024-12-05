import Navbar from "../../components/Navbar/Navbar";
import ProviderTackerMain from "../../components/ProviderTackerMain/ProviderTackerMain";
import FooterPage from "../../components/FooterPage/FooterPage";

function ProviderTaker() {
  return (
    <div className="page-container">
     <Navbar />
      <div className="content-wrapper d-flex justify-content-center align-items-center">
        <ProviderTackerMain/>
      </div>
      <FooterPage />
    </div>
  );
}

export default ProviderTaker;
