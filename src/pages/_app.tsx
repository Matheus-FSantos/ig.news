import "../styles/global.scss";
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';

const App = ({ Component, pageProps }: AppProps) => {
  return (
		<div>
			<Header/>
			<Component {...pageProps} />
		</div>
	);
}

export default App;
