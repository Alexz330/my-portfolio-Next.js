import SideBar from "../Components/SideBar/Index";
import Home from "../Containers/Home/Index";
import styles from "../styles/index.module.css";
import Skills from "../Containers/Skills/Index";
import TabBar from "../Components/TabBar/Index";

export default function Index() {
  return (
    <>
      <div className={styles["Principal-Container"]}>
        <SideBar />
        <Home />
        <Skills />
        <TabBar />
      </div>
    </>
  );
}
