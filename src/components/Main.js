import React from "react";
import styles from "../Main.module.css";
import Nav from "./Nav";

function Montevideo() {
  return (
    <>
      <Nav />
      <div className={styles.Main}>
        <h1 className={styles.weather}>Weather App</h1>
      </div>
    </>
  );
}

export default Montevideo;
