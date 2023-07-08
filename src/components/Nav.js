import React from "react";
import styles from "../Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.nav}>
      <NavLink exact to="../Montevideo">
        <a className={styles.city}>Montevideo</a>
      </NavLink>
      <NavLink exact to="../Medellin">
        <a className={styles.city}>Medellin</a>
      </NavLink>
      <NavLink exact to="../Rio">
        <a className={styles.city}>Rio</a>
      </NavLink>
      <NavLink exact to="../Lima">
        <a className={styles.city}>Lima</a>
      </NavLink>
    </div>
  );
}

export default Nav;
