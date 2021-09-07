import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { RichText } from 'prismic-dom'
import { getPrismicClient } from '../../../services/prismic'

import styles from '../post.module.scss'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { api } from '../../../services/api'
import { getStripeJs } from '../../../services/stripe-js'
import { useEffect } from 'react'

type Post = {
  slug: string
  title: string
  content: string
  updatedAt: string
}

interface PostPreviewProps {
  post: Post
}

export default function PostPreview({ post } : PostPreviewProps) {

  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    if(session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])

  function handleSubscribe() {
    signIn('google')
    return
  }
  
  return (
    <>
      <Head>
        <title>{post.title} | FitClub</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className={`${styles.postContent} ${styles.previewContent}`} dangerouslySetInnerHTML={{__html: post.content}} />

          <div className={styles.continueReading} onClick={handleSubscribe}>
            Quer continuar lendo?
            <Link href="">
              <a>Inscreva-se agora! 👈</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps : GetStaticProps = async ({ params }) => {

  const slug = params?.slug

  const prismic = getPrismicClient()

  const response = slug && await prismic.getByUID('post', String(slug), {} )

  const post = {
    slug,
    title: RichText.asText(response && response.data.title),
    content: RichText.asHtml(response && response.data.content.splice(0, 2)),
    updatedAt: response && new Date(response.last_publication_date as string).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }

  return {
    props: {
      post
    },
    revalidate: 60 * 30 // 30 minutes
  }
}