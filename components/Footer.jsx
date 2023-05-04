import React from "react";
import Image from "next/image";

import styles from "@/styles/Footer.module.css";

const Footer = ({ t }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <div className={styles.logoConatiner}>
            <Image src="/images/logoWhite.png" fill />
          </div>
          <p className={styles.copyright}>
            Požuri&copy; {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <i className={styles.title}>
            {t("footerTitle")}
          </i>
        </div>
        <div className={styles.contactsContainer}>
          <h3>{t("contactUs")}</h3>
          <p>pozuri@gmail.ba</p>
          <p>+387 62 123 456</p>
          <p>Our Address 71000 Sarajevo</p>
        </div>
      </div>
    </div>
  )
}

export default Footer