import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      {/* Left Section */}
      <div className={`${styles['footer-section']} ${styles.left}`}>
        <h3 className={styles.pad}>Contact Us</h3>
        
        {/* Grouped emails for rahma and reham */}
        <div className={styles.emailGroup}>
          <p><i>rahmaali.ra9@gmail.com</i></p>
          <p><i>rehamasem442@gmail.com</i></p>
        </div>

        {/* Grouped emails for salma and roaa */}
        <div className={styles.emailGroup}>
          <p><i>roaaemam948@gmail.com</i></p>
          <p><i>salma.akafarag162@gmail.com</i></p>
        </div>
      </div>

      {/* Right Section */}
      <div className={`${styles['footer-section']} ${styles.right}`}>
        <h1 className={styles.text}>Meal Aid</h1>
        <p  className={styles.p1}>@All rights reserved to MEAL-AID</p>
      </div>
    </footer>
  );
}

export default Footer;

