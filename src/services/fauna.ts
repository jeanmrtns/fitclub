import { Client } from 'faunadb';

export const fauna = new Client({
  secret: String(process.env.NEXT_FAUNADB_KEY),
});
