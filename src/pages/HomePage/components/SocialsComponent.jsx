import styles from '../styles/HomePage.module.css'; 
import  Instagram from "../../../assets/images/instagram.svg?react";
import  LinkedIn from "../../../assets/images/linkedIn.svg?react";
import  Gmail from "../../../assets/images/gmail.svg?react";

function SocialsComponent() {
  return (
    <>
        <p  className={styles.socialTitle}>Social Links</p>
        <div className={styles.socialLinksDiv}>
            <a href='https://www.linkedin.com/company/garage-of-devs/'><LinkedIn className={styles.linkedIn} /></a>
            <a href='mailto:garageofdevs@gmail.com'><Gmail className={styles.gmail} /></a>
            <a href='https://www.instagram.com/garageofdevs/'><Instagram className={styles.instagram} /></a>
        </div>
    </>
  )
}

export default SocialsComponent