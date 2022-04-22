import styles from "./styles.module.css";
import Image from "next/image";
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
import photo_p from "../../img/photo_p.jpg";

const SideBar = () => {
  return (
    <section className={styles.SideBar}>
      <div className={styles.Profile}>
        <div className={styles["Profile-Photo"]}>
          <div className="">
            <Image className={styles.photo} src={photo_p} alt="" />

            <p className={styles["Profile-name"]}>Alexis López</p>
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.icon}>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} transform="down-4 grow-2.5" />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} transform="down-4 grow-2.5" />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} transform="down-4 grow-2.5" />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} transform="down-4 grow-2.5" />
          </a>
        </div>
      </div>
      <nav className={styles.nav}>
        <a href="">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <a href="">
          {" "}
          <FontAwesomeIcon icon={faUser} /> About{" "}
        </a>
        <a href="">
          <FontAwesomeIcon icon={faComputer} /> My Skills
        </a>
        <a href="">
          <FontAwesomeIcon icon={faBriefcase} /> Porfolio
        </a>
      </nav>

      <footer className={styles.footer}>
        <p>
          ©Copyright Alexis_López
           
        </p>
        <p> Designed by Alexis López   </p>
         
      </footer>
    </section>
  );
};

export default SideBar;
