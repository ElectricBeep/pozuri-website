import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "@/styles/HowItWorks.module.css";
import { slideIn, staggerContainer } from "../utils/motion";

const HowItWorks = ({ t }) => {
  const [current, setCurrent] = useState(0);

  const photos = [
    {
      id: 1,
      img: "pozuriApp5.png"
    },
    {
      id: 2,
      img: "pozuriApp6.png"
    },
    {
      id: 3,
      img: "pozuriApp8.png"
    },
    {
      id: 4,
      img: "pozuriApp7.png"
    },
  ];

  const texts = [
    {
      id: 1,
      title: t("hiwTitleOne"),
      text: t("hiwTextOne"),
    },
    {
      id: 2,
      title: t("hiwTitleTwo"),
      text: t("hiwTextTwo")
    },
    {
      id: 3,
      title: t("hiwTitleThree"),
      text: t("hiwTextThree")
    },
    {
      id: 4,
      title: t("hiwTitleFour"),
      text: t("hiwTextFour")
    },
  ];

  const length = photos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (number) => {
    setCurrent(number);
  };

  return (
    <motion.div
      className={styles.container}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amoung: 0.25 }}
    >
      <div className={styles.circleOne} />
      <div className={styles.circleTwo} />
      <div className={styles.circleThree} />
      <div className={styles.circleSix} />
      <div className={styles.circleFour} />
      <div className={styles.circleFive} />
      <div className={styles.shape} />
      <div className={styles.content}>
        <div className={styles.topContent}>
          <motion.div
            className={styles.left}
            variants={slideIn("left", "spring", 0.3, 1)}
          >
            {photos.map((img, index) => (
              <div className={index === current ? styles.slideActive : styles.slide} key={img.id}>
                {index === current && (
                  <img src={`./images/${img.img}`} alt="phone app" className={styles.img} />
                )}
              </div>
            ))}
          </motion.div>
          <motion.div
            className={styles.right}
            variants={slideIn("right", "spring", 0.3, 1)}
          >
            {texts.map((text, index) => (
              <div className={index === current ? styles.slideActive : styles.slide} key={text.id}>
                {index === current && (
                  <div className={styles.textContainer}>
                    <h2 className={styles.heading}>{text.title}</h2>
                    <p className={styles.text}>{text.text}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className={styles.bottomContent}
          variants={slideIn("down", "spring", 0.4, 1)}
        >
          <FiChevronLeft className={`${styles.icon} ${styles.iconLeft}`} onClick={prevSlide} />
          <span className={current === 0 ? `${styles.numberActive} ${styles.numberActive1}` : `${styles.number} ${styles.number1}`} onClick={() => goToSlide(0)}>1</span>
          <span className={current === 1 ? styles.numberActive : styles.number} onClick={() => goToSlide(1)}>2</span>
          <span className={current === 2 ? styles.numberActive : styles.number} onClick={() => goToSlide(2)}>3</span>
          <span className={current === 3 ? styles.numberActive : styles.number} onClick={() => goToSlide(3)}>4</span>
          <FiChevronRight className={`${styles.icon} ${styles.iconRight}`} onClick={nextSlide} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HowItWorks