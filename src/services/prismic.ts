import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT as string, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN as string,
    req,
  });

  return prismic;
}
