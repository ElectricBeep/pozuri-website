import Head from "next/head";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import About from "../../components/About";
import Features from "../../components/Features";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Požuri</title>
        <meta name="description" content="Požuri mobile app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/redLogoNoBg.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar t={t} />
        <Header t={t} />
        <Features t={t} />
        <About t={t} />
        <Footer t={t} />
      </main>
    </>
  )
}
