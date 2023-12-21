import Head from "next/head";
import { Header } from "../components/Header";

const Home = () => {
  return (
		<>
			<Head>
				<title>Início | ig.news</title>
			</Head>
			<div>
				<Header/>
				<h1>Hello World</h1>
			</div>
		</>
  )
}

export default Home;
