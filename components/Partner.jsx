import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from '@emailjs/browser';

import styles from "@/styles/Partner.module.css";

const Partner = ({ t }) => {
  const [active, setActive] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    if (!name || !email || !address || !phone || !message) {
      return alert("Please fill all required fields.")
    }
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm
      ("service_64qv3ms",
        "template_g1z9l2a",
        formRef.current,
        "_iGvRwWb7k8Vv93OH"
      )
      .then((result) => {
        setIsSending(false);
        setSuccess(true);
        setName("");
        setAddress("");
        setEmail("");
        setPhone("");
        setMessage("");
        setTimeout(() => {
          setSuccess(false);
        }, 4000);

      }, (error) => {
        setError(true);
        setIsSending(false);
        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  return (
    <div className={styles.container} id="business">
      <div className={styles.shape} />
      <div className={styles.content}>
        <div className={styles.left}>
          <div>
            <h1 className={styles.title}>
              {t("partnerTitle")}
            </h1>
            <p className={styles.textFirst}>
              {t("partnerTextOne")}
            </p>
            <p className={styles.textSecond}>
              {t("partnerTextTwo")}
            </p>
            <p className={styles.textThird}>
              {t("partnerTextThree")}
            </p>
            <div className={styles.center}>
              <button className={styles.btn} onClick={() => setActive(true)}>
                <svg width="180px" height="60px" viewBox="0 0 180 60" className={styles.border}>
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                </svg>
                <span>{t("partnerButtonText")}</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/hands2.jpg" alt="handshake" className={styles.image} />
        </div>
      </div>
      {active && (
        <div className={styles.contactContainer} onClick={() => setActive(false)}>
          <div className={styles.contactFromContainer} onClick={(e) => e.stopPropagation()}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <h2>
                {t("formTitle")}
              </h2>
              <label>
                {t("labelOne")}<span style={{ color: "red" }}>*</span>
              </label>
              <input name="company_name" type="text" className={styles.input} onChange={(e) => setName(e.target.value)} value={name} required />
              <label>
                {t("labelTwo")}<span style={{ color: "red" }}>*</span>
              </label>
              <input name="company_address" type="text" className={styles.input} onChange={(e) => setAddress(e.target.value)} value={address} required />
              <label>
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input name="user_email" type="email" className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} required />
              <label>
                {t("labelFour")}<span style={{ color: "red" }}>*</span>
              </label>
              <input name="phone" type="tel" className={styles.input} onChange={(e) => setPhone(e.target.value)} value={phone} required />
              <label>
                {t("labelFive")}<span style={{ color: "red" }}>*</span>
              </label>
              <textarea name="message" rows="3" className={styles.textarea} onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
              {success && (
                <p className={styles.message} style={{ color: "green" }}>
                  {t("messageSuccess")}
                </p>
              )}
              {error && (
                <p className={styles.message} style={{ color: "red" }}>
                  {t("messageError")}
                </p>
              )}
              {isSending ? (
                <div className={styles.loadingButton}>
                  <div className={styles.loading}></div>
                </div>
              ) : (
                <button disabled={isSending} onClick={handleSubmit} className={styles.submitButton}>
                  {t("submitButtonText")}
                </button>
              )}
            </form>
            <AiOutlineClose size={20} className={styles.closeIcon} onClick={() => setActive(false)} />
          </div>
        </div>
      )}
      <div className={styles.circleOne} />
      <div className={styles.circleTwo} />
      <div className={styles.circleThree} />
    </div>
  )
}

export default Partner