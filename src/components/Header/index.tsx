import { ReactElement } from "react";
import { SignInButton } from "../SignInButton ";
import styles from "./styles.module.scss";

const Header = (): ReactElement => {
	return(
		<header className={ styles.headerContainer }>
			<div className={ styles.headerContent }>
				<img src="/images/logo.svg" alt="ig.news logo" />
				<nav>
					<a className={ styles.active }>Home</a>
					<a>Posts</a>
				</nav>
				<SignInButton />
			</div>
		</header>
	);
}

export { Header };
