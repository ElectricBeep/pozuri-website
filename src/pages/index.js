import Head from "next/head";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import Partner from "../components/Partner";
import FAQ from "../components/FAQ";

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
        <title>Požuri Mobile App</title>
        <meta name="description" content="Požuri is a mobile application designed to assist you in saving money while also promoting environmental sustainability." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/redLogoNoBg.png" />
        <link rel="apple-touch-icon" href="/images/redLogoNoBg.png" />
        <meta property="og:title" content="Požuri Mobile App" />
        <meta property="og:description" content="Požuri is a mobile application designed to assist you in saving money while also promoting environmental sustainability." />
        <meta property="og:image" content="/images/redLogoNoBg.png" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ShoppingApplication",
              name: "Požuri",
              operatingSystem: "ANDROID",
              applicationCategory: "GameApplication",
            })
          }}
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar t={t} />
        <Header t={t} />
        <Features t={t} />
        <About t={t} />
        <Partner t={t} />
        <FAQ t={t} />
        <Footer t={t} />
      </main>
    </>
  )
}
