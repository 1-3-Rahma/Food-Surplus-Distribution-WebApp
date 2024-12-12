import styles from '../Header/Header.module.css'
import logo from '../../Assets/logo.png'
import logout from '../../Assets/logout.png'
import profile from '../../Assets/6833605.png'
import classNames from 'classnames'
import notification from '../../Assets/Notification.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Meal-Aid" width={70} height={70} />
      </div>

      <div className={styles.nav_links}>
        <div className={classNames(styles.nav_item, styles.logout)}>
          <Link to='/Notifications'>
            <img src={notification} alt="Notifications" className={styles.icon} width={23} height={23} />
            <span>Notifications</span>
          </Link>
        </div>

        <div className={classNames(styles.nav_item, styles.logout)} >
        <Link to='/Login'>
            <img src={logout} alt="Logout" className={styles.icon} width={20} height={20} />
            <span>Logout</span>
          </Link>
        </div>

        <div className={styles.profile}>
          <img src={profile} alt="User Profile" className={styles.profileImg} width={45} height={45} />
        </div>
      </div>
    </header>
  );
}

export default Header;