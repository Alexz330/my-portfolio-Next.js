import styles from "./styles.module.css";

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className="">
        <img src="" alt="" />
      </div>
      <nav className={styles.nav}>
        <a href="">About</a>
        <a href="">My Skills</a>
        <a href="">Work</a>
        <a href="">Blog</a>
      </nav>
      <ul class={styles.social}>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
    </div>
  );
};

export default SideBar;
