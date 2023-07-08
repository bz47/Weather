import React from "react";
import styles from "../Lima.module.css";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

let choice = document.getElementById("choice");
let selection;

function Lima() {
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
    {
      day: "Wednesday",
      high: 70,
      low: 60,
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
    {
      day: "Wednesday",
      high: 70,
      low: 60,
    },
  ];

  const show = () => {
    selection = choice.value;
    console.log(selection);
  };

  return (
    <>
      <Nav />
      <div className={styles.Lima}>
        <h1>Lima</h1>
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
            <select name="days" id="choice">
              <option value="today">Today</option>
              <option value="three-day">3 Day</option>
              <option value="five-day">5 Day</option>
              <option value="seven-day">7 Day</option>
            </select>
            <button className={styles.select} onClick={show}>
              Select
            </button>
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

export default Lima;
