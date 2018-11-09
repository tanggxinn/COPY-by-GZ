import React from "react";

import Header from "../Header";
import Navbar from "../Navbar";

import styles from "./index.less";

export default function Layout (props) {
  const { children } = props;
  const navbarData = props.navbarData;
  return (
    <div className={styles.root}>
      <div className={styles.over}>
        <header>
          <Header />
        </header>
      </div>
      <div className={styles.half}>
        <nav>
          <Navbar navbarData={navbarData} />
        </nav>
      </div>
      <div className={styles.in}>
        <div className={styles.init}>
          {children}
        </div>
      </div>
    </div>
  );
}