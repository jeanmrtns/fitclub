import NextAuth from 'next-auth';
import Provider from 'next-auth/providers';
import { query as q } from 'faunadb';
import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Provider.Google({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      await fauna.query(q.Create('users', { data: { email } }));

      return true;
    },
  },
  jwt: {
    signingKey: process.env.JWT_HASH,
  },
});
