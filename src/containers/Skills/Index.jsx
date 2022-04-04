import styles from "./styles.module.css";
import FadeInSection from "../../components/FadeInSection/Index";
import Render from "../../components/Render/Index";
import GraphicsBar from "../../components/GraphicsBar/Index";

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
