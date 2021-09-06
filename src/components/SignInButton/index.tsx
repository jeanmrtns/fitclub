import { signIn, useSession, signOut } from 'next-auth/client';
import { FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export default function SignInButton() {

  const [session] = useSession()
  const user = session && session.user

  return session ? (
    <button type="button" className={styles.SignInButton} onClick={() => signOut()}>
      {/* <FaGoogle color="#fdbc38" /> */}
      <img src={String(user?.image)} alt={session.user && String(user?.name)} className={styles.userImage} />
      {user?.name}
      <FiX className={styles.logout} title="Sair" />
    </button>
  ) : (
    <button type="button" className={styles.SignInButton} onClick={() => signIn('google')}>
      <FaGoogle />
      Entre com o Google
    </button>
  );
}
