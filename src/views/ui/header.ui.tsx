import React from "react";
import classNames from "classnames";
import styles from "@styles/modules";
// import { useAppSelector } from "@redux";
import UI from "@ui";
import Component from '@components';
import constants from '@constants';

interface IProps {}

const Header: React.FC<IProps> = (): JSX.Element => {
  const className = classNames("container", styles.header.root);

  return (
    <div className={className}>
			<Component.Link to={constants.routes.app.home}>
				<UI.Logotype />
			</Component.Link>

			<UI.Navigation />

      <Profile />
    </div>
  );
};

const Profile: React.FC = (): JSX.Element => {
	// вернуться
  // const user = useAppSelector((state) => state.user);

	const testData = {
		name: "Курбонхон",
		surname: "Тоджидинов",
		avatar: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
	}

  // if (!user.data) {
  //   return <></>;
  // }
  return (
    <div className={styles.header.profile}>
      <UI.Notifications />

      <div className={styles.header.profile__useravatar}>
        {/* <img src={user.data.avatar} alt="" /> */}
        <img src={testData.avatar} alt="" />
      </div>

      <div className={styles.header.profile__username}>
        {/* {user.data.name} <br /> {user.data.surname} */}
        {testData.name} <br /> {testData.surname}
      </div>
    </div>
  );
};

export default Header;
