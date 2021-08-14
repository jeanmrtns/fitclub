import React from "react";
import SignInButton from "../SignInButton";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h4>
          <span>Fit</span>Club
        </h4>
        <nav>
          <a className={styles.active}>Início</a>
          <a>Novidades</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
