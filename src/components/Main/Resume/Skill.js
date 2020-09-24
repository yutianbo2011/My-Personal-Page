import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Resume.module.css";
import { faCode, faCog, faGlobe, faAnchor } from "@fortawesome/free-solid-svg-icons";

export const Skill = props => {
  const iconList = [faCode, faCog, faAnchor, faGlobe];
  return (
    <article>
      <ul>
        {Object.keys(props.skillData).map(((category, categoryIndex) =>{
          return (
            <div key={category+ categoryIndex}>
              <h2>
                <FontAwesomeIcon icon={iconList[categoryIndex]} className={styles.icon} />
                {category}
              </h2>
              <li>
                <ul>
                  {props.skillData[category].map((skill, index) => (
                    <li key={skill + index}>{skill}</li>
                  ))}
                </ul>
              </li>
            </div>
          );
        }))}
      </ul>
      
    </article>
  );
};
