// import styles from "./Footer.module.css";
// function Footer (){
//     return (
//       <footer className={styles.footer_container}>
//        <div className="footer-section left">
//         <h3 className={styles.pad}>Contact Us</h3>
//         <p><i>rahmaali.ra9@gmail.com</i> <i className={styles.space1}>rehamasem442@gmail.com</i></p>
//         <p><i>roaaemam948@gmail.com</i> <i className={styles.space2}>salma.akafarag162@gmail.com</i></p>
//       </div>

//       <div className="footer-section right">
//         <h1 className={styles.text}>Meal Aid</h1>
//             <div className={styles.links}>
//           <a href="about" className={styles.link}>About</a>
//           <span className={styles.separator}>|</span>
//           <a href="highlight" className={styles.link}>Highlight</a>
//           <span className={styles.separator}>|</span>
//           <a href="signup" className={styles.link}>Sign up</a>
//           <span className={styles.separator}>|</span>
//           <a href="login" className={styles.link}>Login</a>
//             </div>
//         <p className={styles.p1}>@All rights reserved to MEAL-AID</p>
//       </div>
           
//       </footer>
//     )
//   }


//   export default Footer;

// import styles from "./Footer.module.css";

// function Footer() {
//   return (
//     <footer className={styles.footer_container}>
//       {/* Left Section */}
//       <div className={`${styles['footer-section']} ${styles.left}`}>
//         <h3 className={styles.pad}>Contact Us</h3>
//         <p><i>rahmaali.ra9@gmail.com</i> <i className={styles.space1}>rehamasem442@gmail.com</i></p>
//         <p><i>roaaemam948@gmail.com</i> <i className={styles.space2}>salma.akafarag162@gmail.com</i></p>
//       </div>

//       {/* Right Section */}
//       <div className={`${styles['footer-section']} ${styles.right}`}>
//         <h1 className={styles.text}>Meal Aid</h1>
//         <div className={styles.links}>
//           <a href="about" className={styles.link}>About</a>
//           <span className={styles.separator}>|</span>
//           <a href="highlight" className={styles.link}>Highlight</a>
//           <span className={styles.separator}>|</span>
//           <a href="signup" className={styles.link}>Sign up</a>
//           <span className={styles.separator}>|</span>
//           <a href="login" className={styles.link}>Login</a>
//         </div>
//         <p className={styles.p1}>@All rights reserved to MEAL-AID</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

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
        <div className={styles.links}>
          <a href="about" className={styles.link}>About</a>
          <span className={styles.separator}>|</span>
          <a href="highlight" className={styles.link}>Highlight</a>
          <span className={styles.separator}>|</span>
          <a href="signup" className={styles.link}>Sign up</a>
          <span className={styles.separator}>|</span>
          <a href="login" className={styles.link}>Login</a>
        </div>
        <p  className={styles.p1}>@All rights reserved to MEAL-AID</p>
      </div>
    </footer>
  );
}

export default Footer;

