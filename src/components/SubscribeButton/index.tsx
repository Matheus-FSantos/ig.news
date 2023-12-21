import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
	priceId: string
}

const SubscribeButton = ({ priceId }: ISubscribeButtonProps): ReactElement => {
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
