import Stripe from "stripe";

export const stripe = new Stripe(
	String(process.env.STRIPE_API_KEY),
	{
		apiVersion: '2023-10-16',
		appInfo: {
			name: "ig.news",
			version: "1.0.0"
		}
	}
);
