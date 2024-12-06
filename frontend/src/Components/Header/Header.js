import styles from '../Header/Header.module.css'
import logo from '../../Assets/logo.png'
import logOut from '../../Assets/logout.png'
import profile from '../../Assets/6833605.png'
import classNames from 'classnames'
import notification from '../../Assets/Notification.png'

function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Meal-Aid" width={70} height={70} />
      </div>
      <div className={styles.nav_links}>
        <div className={classNames(styles.nav_item ,styles.logout)}>
          <img src={notification} alt="Notifications" className={styles.icon} width={20} height={20} />
          <span>Notifications</span>
        </div>
        <div className={classNames(styles.nav_item ,styles.logout)} >
          <img src={logOut} alt="Log Out"  width={20} height={20} />
          <span>Logout</span>
        </div>
        <div className={styles.profile}>
          <img src={profile} alt="User Profile" className={styles.profileImg} width={40} height={40} />
        </div>
      </div>
    </header>
  );
}

export default Header;