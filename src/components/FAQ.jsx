import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

import styles from "@/styles/FAQ.module.css";
import { slideIn, staggerContainer } from "../../utils/motion";

const FAQ = ({ t }) => {
  const [selected, setSelected] = useState(null);

  const questions = [
    {
      id: 1,
      question: t("faqQOne"),
      answer: t("faqAOne")
    },
    {
      id: 2,
      question: t("faqQTwo"),
      answer: t("faqATwo")
    },
    {
      id: 3,
      question: t("faqQThree"),
      answer: t("faqAThree")
    },
    {
      id: 4,
      question: t("faqQFour"),
      answer: t("faqAFour")
    },
    {
      id: 5,
      question: t("faqQFive"),
      answer: t("faqAFive")
    },
  ];

  const handleToggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div
      className={styles.container}
      id="faq"
    >
      <h1 className={styles.header}>
        {t("faqHeader")}
      </h1>
      <div className={styles.contentContainer}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <motion.div
            className={styles.questions}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amoung: 0.25 }}
          >
            <motion.p
              className={styles.desc}
              variants={slideIn("down", "spring", 0.3, 1)}
            >
              {t("faqDesc")}
            </motion.p>
            {questions.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.item}
                onClick={() => handleToggle(i)}
                variants={slideIn("down", "spring", 0.35, 1)}
              >
                <div className={styles.title} >
                  <h3>{item.question}</h3>
                  {
                    selected === i
                      ? <IoIosArrowUp size={22} />
                      : <IoIosArrowDown size={22} />
                  }
                </div>
                <div className={selected === i ? `${styles.content} ${styles.show}` : styles.content}>
                  {item.answer}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className={styles.circleOne} />
      <div className={styles.circleTwo} />
      <div className={styles.circleThree} />
      <div className={styles.circleFour} />
      <div className={styles.circleFive} />
      <div className={styles.circleSix} />
      <div className={styles.circleSeven} />
    </div>
  )
}

export default FAQ