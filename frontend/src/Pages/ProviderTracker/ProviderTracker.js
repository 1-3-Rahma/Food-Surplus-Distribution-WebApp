import ProviderTackerMain from "../../Components/ProviderTackerMain/ProviderTackerMain";
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function ProviderTaker() {
  return (
    <div className="page-container">
     <Header/>
      <div className="content-wrapper d-flex justify-content-center align-items-center">
        <ProviderTackerMain/>
      </div>
      <Footer/>
    </div>
  );
}

export default ProviderTaker;
