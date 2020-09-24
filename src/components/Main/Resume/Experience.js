import React from "react";
import styles from "./Experience.module.css";

export const Experience = props => {
  return (
    <section className={styles.detail}>
      <p>
        {props.company}
      </p>
      <p>
        {props.job}  
      </p>
      <p>{props.time}</p>
      <p>​{props.description}</p>
    </section>
  );
};
