import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import SubscribeButton from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Landing-Page | Main</title>
      </Head>
      <main className={styles.homeContainer}>
        <section>
          <span>👏 Bem-vindo ao nosso trabalho!</span>
          <h1>
            <span>Fit</span>Club
          </h1>
          <p>
            Conheça nosso novo site para ser <br />
            seu guia em saúde por apenas <span>{product.amount} por mês</span>.
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image
          src="/images/health.svg"
          width="400"
          height="600"
          alt="Apple Logo"
          className={styles.hero}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JOOlSJuibejeR6W7pMlQUX0");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(price.unit_amount) / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 * 30, // 30 dias
  };
};
