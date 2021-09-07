import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.NEXT_FAUNA_KEY || '',
});
