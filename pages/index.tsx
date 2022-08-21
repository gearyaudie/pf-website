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
        <meta
          name="google-site-verification"
          content="W0gEYFBLTP023R9FJWqC7aN8G5O6bTofhqB2mNyMPjY"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
