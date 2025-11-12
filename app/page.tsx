import Link from 'next/link'
import styles from "@/app/styles/home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Hello sasamine Hello sasamine Hello sasamine Hello sasamine Hello
        sasamine Hello sasamine Hello sasamine Hello sasamine Hello sasamine
        Hello sasamine Hello sasamine Hello sasamine Hello sasamine Hello
        sasamine Hello sasamine Hello sasamine
      </p>

      <Link className={styles.btn} href="/ninjas">
        See Ninja listing
      </Link>
    </div>
  );
}
