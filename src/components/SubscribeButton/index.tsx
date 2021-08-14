import React from "react";
import styles from "./styles.module.scss";
import { SubscribeButtonProps } from "../../types/SubscribeButtonProps";

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Inscreva-se agora
    </button>
  );
}
