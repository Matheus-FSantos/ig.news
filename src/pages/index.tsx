import Head from "next/head";
import styles from "./home.module.scss";
import { Header } from "../components/Header";

const Home = () => {
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
						<h1>News about <br /> th <span>React</span> world.</h1>
						<p>
							Get access to all the publications <br />
							<span>for $9.90 month</span>
						</p>
					</section>
					
					<img src="/images/woman.svg" alt="Girl coding" />
				</main>
			</div>
		</>
  )
}

export default Home;
