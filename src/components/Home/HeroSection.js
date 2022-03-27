import React from "react";
import { Link } from "react-router-dom";
import styles from "./Css/heroSection.module.css";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.heroImg}>
        <div className={styles.headingBox}>
          <h1>“When you play the game of thrones, you win or you die.</h1>
          <Link to='/videos'>
            <div className={`${styles.btn} ${styles.buttonPrimary} `}>
              Explore
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
