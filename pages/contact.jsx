import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Navbar} from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Daniel</title>
        <meta name="description" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Contact page</h1>

        <h1 className={styles.title}>
          Ir a <Link href="/">Contact</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.jsx</code>
        </p>
      </main>
    </div>
  )
}
