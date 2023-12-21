import Stripe from "stripe";
import { version } from "../../package.json";

export const stripe = new Stripe(
	String(process.env.STRIPE_API_KEY),
	{
		apiVersion: '2023-10-16',
		appInfo: {
			name: "ig.news",
			version: version
		}
	}
);
