import SideBar from "../Components/SideBar/Index";
import Home from "../Containers/Home/Index";
import styles from "../styles/index.module.css";
import Skills from "../Containers/Skills";



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
