import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { contact as contactData } from "../../../assets/data/contact";

export const Home = () => {
  console.log(contactData.avatar.src);
  return (
    <section className={styles.home}>
      <div className={styles.avatar}>
        <img src={contactData.avatar.src } alt={contactData.avatar.alt} />
      </div>
      <section className={styles.hello}>
        <p>Hello,</p>
        <p>a bit about me:</p>
      </section>
      <section className={styles.button_group}>
        <RoundButton text="My resume" target="nav_resume" />
        <RoundButton text="My projects" target="nav_projects" />
        <RoundButton text="My skills" target="nav_resume" />
      </section>
      <p className={styles.intro}>
        I love coding. I’m excited about turning what I have into practice and make a difference. I like to build applications and create solutions that could meet customers’ requests and facilitate their works. I am dedicated to make the products better. Thus, I am eager to be a Software Engineer. 
        <br />
        <br />I will graduate in 2020 and get a Master's Degree from Texas A&M University majoring in Computer Engineering. I am actively looking for both full-time software engineering developer positions!
      </p>
    </section>
  );
};
