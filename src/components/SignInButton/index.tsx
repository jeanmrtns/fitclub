import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export default function SignInButton() {
  const [logged, setLogged] = React.useState(false);

  function loggin() {
    setLogged(!logged);
  }

  return logged ? (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#fdbc38" />
      Jean Martins
      <FiX className={styles.logout} onClick={loggin} title="Sair" />
    </button>
  ) : (
    <button type="button" className={styles.SignInButton} onClick={loggin}>
      <FaGithub />
      Entre com o GitHub
    </button>
  );
}
