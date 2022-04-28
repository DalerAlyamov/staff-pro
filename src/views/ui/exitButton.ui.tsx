import React from 'react'
import UI from '@ui';
import Icon from '@icons';
import styles from '@styles/modules';

interface IProps {
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ExitButton: React.FC<IProps> = (props): JSX.Element => {
	return (
		<UI.Button onClick={props.onClick} color="#D3D8FF" className={styles.exitButton.root}>
			<div className={styles.exitButton.wrap}>
				{props.children}
				<div className={styles.exitButton.icon}>
					<Icon.KeyboardArrowRight size={24} />
				</div>
			</div>
		</UI.Button>
	)
}

export default ExitButton