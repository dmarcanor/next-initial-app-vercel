import styles from "./MainLayout.module.css";
import Head from "next/head";
import {Navbar} from "../Navbar";

export const MainLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Daniel</title>
        <meta name="description" content="Home page"/>
        <meta name="keywords" content="daniel, marcano, next.js"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navbar/>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
};