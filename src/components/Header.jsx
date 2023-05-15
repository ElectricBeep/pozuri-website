import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { slideIn, staggerContainer } from "../../utils/motion";

const Header = ({ t }) => {
  return (
    <div className={styles.container} id="header">
      <motion.div
        className={styles.left}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amoung: 0.25 }}
      >
        <div className={styles.leftText}>
          <motion.h1
            className={styles.headerFirst}
            variants={slideIn("left", "spring", 0.3, 1)}
          >
            {t("header1")}
          </motion.h1>
          <motion.h1
            className={styles.headerSecond}
            variants={slideIn("left", "spring", 0.35, 1)}
          >
            {t("header2")}
          </motion.h1>
          <motion.h1
            className={styles.headerThird}
            variants={slideIn("left", "spring", 0.4, 1)}
          >
            {t("header3")}
          </motion.h1>
          <motion.p
            className={styles.headerDesc}
            variants={slideIn("left", "spring", 0.45, 1)}
          >
            <span className={styles.headerDescFirst}>Požuri</span> {t("headerDesc")}
          </motion.p>
          <motion.div
            className={styles.buttonsContainer}
            variants={slideIn("left", "spring", 0.5, 1)}
          >
            <div className={styles.button}>
              <Image src="/images/googleBadgee.png" fill alt="button" />
            </div>
            <div className={styles.button}>
              <Image src="/images/appleBadgee.png" fill alt="button" />
            </div>
          </motion.div>
          <motion.p
            className={styles.bottomText}
            variants={slideIn("left", "spring", 0.5, 1)}
          >
            {t("buttonText")}
          </motion.p>
        </div>
        <div className={styles.backgroundCircleOne} />
        <div className={styles.backgroundCircleTwo} />
        <div className={styles.backgroundCircleThree} />
      </motion.div>
      <motion.div
        className={styles.right}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amoung: 0.25 }}
      >
        <motion.img
          src="/images/pozuriApp1.png"
          alt="phone"
          className={styles.rightImage1}
          variants={slideIn("right", "spring", 0.3, 1)}
        />
        <motion.img
          src="/images/pozuriApp2.png"
          alt="phone"
          className={styles.rightImage2}
          variants={slideIn("right", "spring", 0.35, 1)}
        />
      </motion.div>
    </div>
  )
}

export default Header