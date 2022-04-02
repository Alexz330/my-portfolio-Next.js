import SideBar from "../components/SideBar/Index";
import Home from "../containers/Home/Index";
import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <>
      <div className={styles["Principal-Container"]}>
        <SideBar />
        <Home />
        <Home />
      </div>
    </>
  );
}
