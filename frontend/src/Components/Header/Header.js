import styles from '../Header/Header.module.css'
import logo from '../../Assets/logo.png'
import logout from '../../Assets/logout.png'
import profile from '../../Assets/6833605.png'
import classNames from 'classnames'
import notification from '../../Assets/Notification.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const notifications = useSelector(state => state.notifications.notifications);
  const auth = useSelector(state => state.auth);
  const userRole = auth.role ? auth.role.toLowerCase() : localStorage.getItem("role");
  
  const filteredNotifications = notifications.filter(n => 
    n.target === userRole || 
    (n.target === 'all') || 
    (n.recipient && n.recipient === auth.user?.email)
  );
  
  const unreadCount = filteredNotifications.filter(n => !n.read).length;

  const handleProfileClick = () => {
    navigate("/ProfilePage"); 
  };

  // Add function to handle logo click
  const handleLogoClick = () => {
    // Navigate based on user role
    if (userRole === 'consumer') {
      navigate('/Consumer');
    } else if (userRole === 'provider') {
      navigate('/Provider');
    } else if (userRole === 'volunteer') {
      navigate('/Volunteer');
    } else {
      // Default to homepage if role is not recognized
      navigate('/');
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Meal-Aid"  width={70} height={70} />
      </div>

      <div className={styles.nav_links}>
        <div className={classNames(styles.nav_item, styles.logout)}>
          <Link to='/Notifications'>
            <div className={styles.notification_wrapper}>
              <img 
                src={notification} 
                alt="Notifications" 
                className={classNames(styles.icon, { [styles.has_notifications]: unreadCount > 0 })} 
                width={23} 
                height={23} 
              />
              {unreadCount > 0 && (
                <span className={styles.notification_badge}>{unreadCount}</span>
              )}
            </div>
            <span>Notifications</span>
          </Link>
        </div>

        <div className={classNames(styles.nav_item, styles.logout)} >
          <Link to='/Login'>
            <img src={logout} alt="Logout" className={styles.icon} width={20} height={20} />
            <span>Logout</span>
          </Link>
        </div>

        <div className={styles.profile} onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <img src={profile} alt="User Profile" className={styles.profileImg} width={45} height={45} />
        </div>
      </div>
    </header>
  );
}

export default Header;
