import Head from "next/head";
import styles from "./home.module.scss";
import { Header } from "../components/Header";
import { SubscribeButton } from "@/components/SubscribeButton";
import { ReactElement } from "react";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";

interface IHomeProps {
	product: {
		priceId: string,
		amount: number
	}
}

interface IProduct {
	priceId: string,
	amount: string
}

const Home = ({ product }: IHomeProps): ReactElement => {
  return (
		<>
			<Head>
				<title>Home | ig.news</title>
			</Head>
			<div>
				<Header/>
				<main className={ styles.contentContainer }>
					<section className={ styles.hero }>
						<span>👏 Hey, welcome</span>
						<h1>News about <br /> the <span>React</span> world.</h1>
						<p>
							Get access to all the publications <br />
							<span>for {product.amount}/month</span>
						</p>
						<SubscribeButton
							priceId={ product.priceId }
						/>
					</section>
					
					<img src="/images/woman.svg" alt="Girl coding" />
				</main>
			</div>
		</>
  )
}

const getStaticProps: GetStaticProps = async () => {
	const price = await stripe.prices.retrieve("price_1OPppfAevb283gVVqn7hoXTN");

	const product: IProduct = {
		priceId: price.id,
		amount: new Intl.NumberFormat('en', {
			style: "currency",
			currency: "USD",
		}).format(Number(price.unit_amount) / 100),
	}

	return {
		props: {
			product
		},
		revalidate: 60 * 60 * 24 /* 24 hours */
	}
}

export {
	getStaticProps
}

export default Home;
