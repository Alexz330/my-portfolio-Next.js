import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import photo_p from "../../img/photo_p.jpg";
import FadeInSection from "../../Components/FadeInSection/Index";

const About = () => {
  return (
    <div className={styles.About} id="about">
      <section className={styles["About-title"]}>
        <FadeInSection>
          <h2>ABOUT</h2>
        </FadeInSection>
      </section>

      <section className={styles.me}>
        <FadeInSection>
          <h3 className={styles.presentation}>
            Student Engineer & Web Developer.
          </h3>
          <div className={styles["me-data"]}>
            <div className="">
              <p>
                {" "}
                <span className={styles["data-info"]}>Birthday:</span> 28 July
                2001
              </p>
            
              <p>
                <span className={styles["data-info"]}> Phone:</span> +502
                5608-1366
              </p>
              <p>
                <span className={styles["data-info"]}>City:</span>{" "}
                Guatemala,Guatemala
              </p>
            </div>
            <div className="">
              <p>
                <span className={styles["data-info"]}>Age:</span> 20
              </p>
              <p>
                <span className={styles["data-info"]}>Degree:</span> 4 year systems engineering student 
              </p>
              <p>
                <span className={styles["data-info"]}>Email:</span>{" "}
                alexislc330@gmail.com
              </p>
              <p>
                <span className={styles["data-info"]}>Frelance:</span> Available
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
      <div className={styles["me-photo"]}>
        <FadeInSection>
          <Image src={photo_p} />
        </FadeInSection>
      </div>
    </div>
  );
};

export default About;
