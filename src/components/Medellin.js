import React from "react";
import styles from "../Medellin.module.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Medellin() {
  const navigate = useNavigate();

  const back = () => navigate(-1);
  const forward = () => navigate(+1);
  const home = () => navigate("/");

  const arr = [
    {
      day: "Monday",
      high: 80,
      low: 70,
    },
    {
      day: "Tuesday",
      high: 86,
      low: 76,
    },
    {
      day: "Wednesday",
      high: 70,
      low: 60,
    },
  ];

  return (
    <>
      <Nav />
      <div className={styles.Medellin}>
        <h1>Medellin</h1>
        <div className={styles.forecast}>
          <div className={styles.holder}>
            {arr.map((item, i) => (
              <div className={styles.box} id={i}>
                <p>{item.day}</p>
                <p>{item.high}</p>
                <p>{item.low}</p>
              </div>
            ))}
          </div>
          <div className={styles.days}>
            <select name="days">
              <option value="today">Today</option>
              <option value="three-day">3 Day</option>
              <option value="five-day">5 Day</option>
              <option value="seven-day">7 Day</option>
            </select>
            <button className={styles.select}> Select</button>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={back}>PREV</button>
          <button onClick={home}>HOME</button>
          <button onClick={forward}>NEXT</button>
        </div>
      </div>
    </>
  );
}

export default Medellin;
