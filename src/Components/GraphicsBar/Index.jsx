import React from 'react';
import FadeInSection from '../FadeInSection/Index';
import styles from './styles.module.css';
import data from './Skills-data';
import { SiPhp } from "react-icons/si";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";

import {
  faUser,
  faHome,
  faComputer,
  faBriefcase,
  
} from "@fortawesome/free-solid-svg-icons";


const getPorcentageToRem = (porcentage) => porcentage * 50;
const GraphicsBar = () => {
  return (
    <div className={styles["Graphics"]}>
    {data.map((curso, i) => (
      <div className={styles["GraphicsBar-Container"]} key={i}>
        <FadeInSection>
          <div className={styles["GraphicsBar-Information"]}>
            <span>{curso.curso}</span>
            <span>{`${curso.porcentaje * 100}%`}</span>
            <span>{curso.logo}</span>

          </div>
          <div className={styles["bar--back"]}>
            <div
              className={styles["bar--top"]}
              style={{
                width: `${getPorcentageToRem(curso.porcentaje)}rem`,
                height: "1.6rem",
              }}
            ></div>
          </div>
        </FadeInSection>
      </div>
    ))}
  </div>
  )
}

export default GraphicsBar