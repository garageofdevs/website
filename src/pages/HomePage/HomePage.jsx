import GarageofdevsMainLogo from "../../assets/images/garageofdevsMainLogo.svg?react";
import styles from "./styles/HomePage.module.css";
import SocialsComponent from "./components/SocialsComponent";
function HomePage() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.coreContent}>
        <div className={styles.logoAndBrand}>
   
            <GarageofdevsMainLogo className={styles.logo} />
        
          <div style={{ position: "absolute", bottom: "-0.5em" }}>
            <p className={styles.brandName}>Garage Of Devs</p>
          </div>
        </div>
        
        <p className={styles.brandDesc}>
          Garage Of Devs is an dynamic software development firm specializing in
          crafting solutions, we excel in the building platforms and custom
          websites. Our mission is to construct innovative platforms and empower
          clients across diverse industries by enhancing their digital presence.
        </p>
        <SocialsComponent />
      </div>
      <div className={styles.copyright}>© 2024 Garage of Devs </div>
    </div>
  );
}

export default HomePage;
