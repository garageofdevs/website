import styles from "../styles/HomePage.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function SocialsComponent() {
  return (
    <>
      <p className={styles.socialTitle}>Social Links</p>
      <div className={styles.socialLinksDiv}>
        <FaLinkedin className={styles.icon} />
        <BiLogoGmail className={styles.icon} />
        <FaInstagram className={styles.icon} />
      </div>
    </>
  );
}

export default SocialsComponent;
