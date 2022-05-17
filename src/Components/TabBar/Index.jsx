import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faHome,
  faComputer,
  faBriefcase,
  
} from "@fortawesome/free-solid-svg-icons";

const TabBar = () => {
  return (
    <div className={styles.TabBar}>
      <div className={styles.nav}>
        <a href="#home">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a href="#skills">
          {" "}
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faComputer}  />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faBriefcase} />
        </a>
      </div>
    </div>
  );
};

export default TabBar;
