import React from "react";
import { motion } from "framer-motion";

import styles from "@/styles/Features.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const Features = ({ t }) => {
  return (
    <div className={styles.container} id="features">
      <div className={styles.content}>
        <motion.div
          className={styles.card}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <motion.div
            className={styles.imageContainer}
            variants={slideIn("down", "spring", 0.3, 1)}
          >
            <img src="/images/bell.png" alt="bell" className={styles.image} />
          </motion.div>
          <motion.h2 variants={slideIn("down", "spring", 0.35, 1)}>
            {t("featuresTitle1")}
          </motion.h2>
          <motion.p variants={slideIn("down", "spring", 0.4, 1)}>
            {t("featuresDesc1")}
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.card}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <motion.div
            className={styles.imageContainer}
            variants={slideIn("down", "spring", 0.3, 1)}
          >
            <img src="/images/saveMoney.png" alt="money bag" className={styles.image} />
          </motion.div>
          <motion.h2 variants={slideIn("down", "spring", 0.35, 1)}>
            {t("featuresTitle2")}
          </motion.h2>
          <motion.p variants={slideIn("down", "spring", 0.4, 1)}>
            {t("featuresDesc2")}
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.card}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amoung: 0.25 }}
        >
          <motion.div
            className={styles.imageContainer}
            variants={slideIn("down", "spring", 0.3, 1)}
          >
            <img src="/images/review.png" alt="review" className={styles.image} />
          </motion.div>
          <motion.h2 variants={slideIn("down", "spring", 0.35, 1)}>
            {t("featuresTitle3")}
          </motion.h2>
          <motion.p variants={slideIn("down", "spring", 0.4, 1)}>
            {t("featuresDesc3")}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Features