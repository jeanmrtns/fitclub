import Stripe from 'stripe';

export const stripe = new Stripe(String(process.env.NEXT_STRIPE_SECRET_KEY), {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'FitClub',
    version: '0.1.0',
  },
});
