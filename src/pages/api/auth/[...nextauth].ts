import NextAuth from 'next-auth';
import Provider from 'next-auth/providers';

export default NextAuth({
  providers: [
    Provider.Google({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
  ],
});
