import logo from '../../Assets/logo.png'
import classNames from 'classnames'
import styles from '../Header/Header.module.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Meal-Aid" width={70} height={70} />
        <span className={classNames(styles.meal)}>Meal-Aid</span>
      </div>
      <div className={styles.nav_links}>
        <div className={classNames(styles.nav_item, styles.main)}>
          <span>About</span>
        </div>
        <div className={classNames(styles.nav_item, styles.main)} >
          <span>Highlight</span>
        </div>
        <div className={classNames(styles.nav_item, styles.main)} >
          <Link to="signup">
            <span>Signup</span>
          </Link>
        </div>
        <div className={classNames(styles.nav_item, styles.main)} >
          <Link to="/Login">
            <span>Login</span>
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;