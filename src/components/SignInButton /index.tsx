import { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const SignInButton = (): ReactElement => {
	
	const isUserLoggedIn = true;
	
	return isUserLoggedIn ? 
		(
			<button
				type="button"
				className={ styles.signInButton }
			>
				<FaGithub color="#04d361" />
				Matheus-FSantos
				<FiX color="#737380" className={ styles.closeIcon } />
			</button>
		)
	:
		(
			<button
				type="button"
				className={ styles.signInButton }
			>
				<FaGithub color="#eba417" />
				Sign in w. Github
			</button>
		)
}

export { SignInButton };
