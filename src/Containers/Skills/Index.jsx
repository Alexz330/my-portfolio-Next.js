import styles from "./styles.module.css";
import FadeInSection from "../../Components/FadeInSection/Index";
import Render from "../../Components/Render/Index";
import GraphicsBar from "../../Components/GraphicsBar/Index";

const Skills = () => {
  
  return (
    <div className={styles.Skills}>
      <div className={styles["Skills-tittle"]}>
        <FadeInSection>
          <h2>skills</h2>
        </FadeInSection>
      </div>
     <GraphicsBar />
      <div className={styles.render}>
        <FadeInSection>
          <Render />
        </FadeInSection>
      </div>
    </div>
  );
};

export default Skills;
