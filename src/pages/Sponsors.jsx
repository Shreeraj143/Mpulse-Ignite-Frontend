import React from "react";
import { Helmet } from "react-helmet";
import styles from "../styles/pages/Sponsors.module.css";

const Sponsors = () => {
  return (
    <div className={styles.sponsors}>
      <Helmet>
        <title>Mpulse Ignite 2023 | Sponsors</title>
      </Helmet>

      <img src="/ignite-logo.png" alt="ignite-logo" />
      <h1>Sponsors</h1>
      <div className={styles["sponsors-logo"]}>
        <img src="/sponsors/graduData.jpg" alt="" />
        <img src="/sponsors/itDesk.png" alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
