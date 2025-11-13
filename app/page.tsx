import Link from "next/link";
import styles from "@/app/styles/home.module.css";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <div className={styles.text}>
          <h2>🏡 My Home Base</h2>
          My digital environment is built on modern web standards utilizing
          frontend JavaScript/HTML/CSS stacks, specifically excluding frameworks
          like Vue and Angular. I prioritize clean, performant, and maintainable
          code.
        </div>
        <p>
          My aim is to carry out signature move, delivering highly concise and
          actionable solutions.
        </p>

        <Link className={styles.btn} href="/ninjas">
          See Ninja listing
        </Link>
      </div>
    </>
  );
}
