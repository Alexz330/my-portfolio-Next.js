import styles from "./styles.module.css";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className="">
        <img src="" alt="" />
      </div>
      <ul class={styles.social}>
        <li><a href=""><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
      <nav className={styles.nav}>
        <a href="">About</a>
        <a href="">My Skills</a>
        <a href="">Work</a>
        <a href="">Blog</a>
      </nav>
    
    </div>
  );
};

export default SideBar;
