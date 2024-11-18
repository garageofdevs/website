import styles from "../styles/HomePage.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function SocialsComponent() {
  function handleClick(url) {
    window.open(url, "_blank");
  }
  return (
    <>
      <p className={styles.socialTitle}>Social Links</p>
      <div className={styles.socialLinksDiv}>
        <FaLinkedin
          onClick={() =>
            handleClick("https://www.linkedin.com/company/garage-of-devs")
          }
          size={20}
          className={styles.icon}
        />
        <a
          href="mailto:garageofdevs@gmail.com"
          target="_top"
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BiLogoGmail className={styles.icon} size={21} />
        </a>
        <FaInstagram
          onClick={() => handleClick("https://www.instagram.com/garageofdevs/")}
          size={20}
          className={styles.icon}
        />
      </div>
    </>
  );
}

export default SocialsComponent;
