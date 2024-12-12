import Notifications from '../../Components/Notifications/Notifications';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function NotificationsPage() {
  return (
    <div className='vh-100'>
      <Header></Header>
      <Notifications></Notifications>
      <Footer></Footer>
    </div>
  );
}

export default NotificationsPage;