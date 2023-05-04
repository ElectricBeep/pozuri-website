import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = ({ t }) => {
  const router = useRouter();
  const [showLanguageContainer, setShowLanguageContainer] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <Image src="/images/logo.png" fill />
        </div>
        <div className={styles.linksContainer}>
          <Link href="#header" className={styles.link}>
            {t("header")}
          </Link>
          <Link href="#features" className={styles.link}>
            {t("features")}
          </Link>
          <Link href="#about" className={styles.link}>
            {t("about")}
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div
          className={styles.languageContainer}
          onClick={() => setShowLanguageContainer(!showLanguageContainer)}
        >
          <span>
            {router.locale === "en" ? "EN" : "BOS"}
            {showLanguageContainer ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
          </span>
          {showLanguageContainer && (
            <div className={styles.select}>
              {router.locales.map(l => (
                <Link href={router.asPath} key={l} locale={l} className={styles.selectItem} onClick={() => setShowLanguageContainer(false)}>
                  {l === "en"
                    ? "EN"
                    : "BOS"
                  }
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={styles.mobileMenuContainer}>
          <BiMenuAltRight size={32} onClick={() => setIsActive(!isActive)} />
        </div>
      </div>
      {isActive && (
        <div className={styles.rightMobileWrapper} onClick={() => setIsActive(false)}>
          <div className={styles.rightMobile} onClick={(e) => e.stopPropagation()}>
            <AiOutlineClose size={30} className={styles.closeIcon} onClick={() => setIsActive(false)} />
            <div className={styles.rightMobileMenu}>
              <hr />
              <Link href="#header" className={styles.linkMobile} onClick={() => setIsActive(false)}>
                {t("header")}
              </Link>
              <hr />
              <Link href="#features" className={styles.linkMobile} onClick={() => setIsActive(false)}>
                {t("features")}
              </Link>
              <hr />
              <Link href="#about" className={styles.linkMobile} onClick={() => setIsActive(false)}>
                {t("about")}
              </Link>
              <hr />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar