import SignInButton from "../SignInButton";
import styles from "./styles.module.scss";

import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h4>
          <span>Fit</span>Club
        </h4>
        <nav>
          <Link href="/">
            <a className={styles.active}>Início</a>
          </Link>
          <Link href="/posts">
            <a>Novidades</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
