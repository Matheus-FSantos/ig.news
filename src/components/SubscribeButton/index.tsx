import { ReactElement } from "react";
import styles from "./styles.module.scss";

const SubscribeButton = (): ReactElement => {
	return (
		<button
			type="button"
			className={ styles.subscribeButton }
		>
			Subscribe now
		</button>
	);
}

export { SubscribeButton };
