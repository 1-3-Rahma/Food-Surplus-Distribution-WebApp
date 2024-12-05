import Navbar from "../../components/Navbar/Navbar";
import ProfileMain from "../../components/ProfileMain/ProfileMain";
import FooterPage from "../../components/FooterPage/FooterPage";

function Profile() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Navbar />
        <ProfileMain />
      </div>
      <FooterPage />
    </div>
  );
}

export default Profile;
