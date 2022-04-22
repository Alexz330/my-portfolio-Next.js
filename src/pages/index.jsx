import SideBar from "../components/SideBar/Index";
import Home from "../containers/Home/Index";
import styles from "../styles/index.module.css";
import Skills from "~/../containers/Skills";



export default function Index() {
  return (
    <>
      <div className={styles["Principal-Container"]}>
        <SideBar />
      <Home />
      <Skills />
      </div>
    </>
  );
}
