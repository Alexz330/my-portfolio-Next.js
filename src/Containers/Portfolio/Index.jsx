import React from "react";
import Image from "next/image";
import Styles from "./styles.module.css";
import c1 from "../../img/c1.png";
import c2 from "../../img/c2.png";
import c3 from "../../img/c3.png";
import c4 from "../../img/c4.png";
import c5 from "../../img/c5.png";
import c6 from "../../img/c6.png";

import imgp1 from "../../img/p1.png";
import imgp2 from "../../img/p2.png";
import imgp3 from "../../img/p3.png";

import FadeInSection from "../../Components/FadeInSection/Index";
const Portfolio = () => {
  return (
    <div className={Styles.Portofolio} id="portafolio">
      <FadeInSection className={Styles.Cirtificates}>
        <h2 className={Styles["Portofolio-title"]}>Certificates</h2>
        <div className={Styles["Container-card"]}>
          <div className={Styles.card}>
            <Image src={c1} className={Styles["Cirtificates_img"]} />
          </div>
          <div className={Styles.card}>
            <Image src={c2} className={Styles["Cirtificates_img"]} />
          </div>
          <div className={Styles.card}>
            <Image src={c3} className={Styles["Cirtificates_img"]} />
          </div>
          <div className={Styles.card}>
            <Image src={c5} className={Styles["Cirtificates_img"]} />
          </div>
          <div className={Styles.card}>
            <Image src={c4} className={Styles["Cirtificates_img"]} />
          </div>

          <div className={Styles.card}>
            <Image src={c6} className={Styles["Cirtificates_img"]} />
          </div>
        </div>
      </FadeInSection>
      <FadeInSection className={Styles.Projects}>
        <h2 className={Styles["Portofolio-title"]}>Projects Personals</h2>
        <div className={Styles["Container-card"]}>
          <div className={Styles["card-projects"]}>
            <a href="https://next-shop-xi.vercel.app/">
              <Image src={imgp1} />
              <p className={Styles["Projects-title"]}>Yarn sale</p>
            </a>
          </div>
          <div className={Styles["card-projects"]}>
            <a href="https://online-shop-7d650.web.app/">
              <Image src={imgp2} />
              <p className={Styles["Projects-title"]}>React shop</p>
            </a>
          </div>
          <div className={Styles["card-projects"]}>
            <a href="https://online-shop-7d650.web.app/">
              <Image src={imgp3} />
              <p className={Styles["Projects-title"]}>Cloud Travel</p>
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Portfolio;
