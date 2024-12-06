import ProfileMain from "../../Components/ProfileMain/ProfileMain";
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Profile() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Header/>
        <ProfileMain />
      </div>
     <Footer/>
    </div>
  );
}

export default Profile;
