import SignInButton from "../SignInButton";
import styles from "./styles.module.scss";
import { ActiveLink } from '../ActiveLink';

export default function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h4>
          <span>Fit</span>Club
        </h4>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Início</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Novidades</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
