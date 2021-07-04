import Head from "next/head";
import HomePage from "../components/HomePage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Geary Audie - Portofolio</title>
        <meta
          name="description"
          content="Geary Audie - Front End Developer - Portofolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
