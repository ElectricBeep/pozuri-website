import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles/About.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const About = ({ t }) => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.line} />
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <img src="/images/pozuriApp3.png" alt="phone" className={styles.image} />
        </div>
      </div>
      <div className={styles.right}>
        <motion.div
          className={styles.textContainer}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <div>
            <motion.h1
              className={styles.title}
              variants={slideIn("right", "spring", 0.3, 1)}
            >
              {t("aboutTitle1")}
            </motion.h1>
            <motion.p
              className={styles.text}
              variants={slideIn("right", "spring", 0.35, 1)}
            >
              {t("aboutText1")}
            </motion.p>
          </div>
          <div>
            <motion.h1
              className={styles.title}
              variants={slideIn("right", "spring", 0.4, 1)}
            >
              {t("aboutTitle2")}
            </motion.h1>
            <motion.p
              className={styles.text}
              variants={slideIn("right", "spring", 0.45, 1)}
            >
              {t("aboutText2")}
            </motion.p>
          </div>
        </motion.div>
        <div className={styles.circleOne} />
        <div className={styles.circleTwo} />
        <div className={styles.circleThree} />
        <div className={styles.circleFour} />
        <div className={styles.circleFive} />
      </div>
    </div>
  )
}

export default About