import React from "react";
import constants from '@constants';
import { useAppSelector } from '@redux';
import * as i from '@interfaces';
import styles from '@styles/modules';
import Component from '@components';

const Navigation: React.FC = (): JSX.Element => {

  const user = useAppSelector(state => state.user);

  const [navigationList, setNavigationList] = React.useState<i.Navigation[]>([]);

  React.useEffect(() => {
    switch("BUYER") {
      case constants.userTypeList.employee:
        setNavigationList(constants.navigationList.employeeList);
        break;
      case constants.userTypeList.accountant:
        setNavigationList(constants.navigationList.accountantList);
        break;
      case constants.userTypeList.buyer:
        setNavigationList(constants.navigationList.buyerList);
        break;
      case constants.userTypeList.director:
        setNavigationList(constants.navigationList.directorList);
        break;
      case constants.userTypeList.hr:
        setNavigationList(constants.navigationList.hrList);
        break;
      default: 
        setNavigationList([]);
    }
  }, [user.type])

  return (
    <div className={styles.navigation.root}>
      
      {navigationList.map((item) => (
        <Component.NavLink 
          to={item.path} 
          key={item.name} 
          className={styles.navigation.item}
          activeClassName={styles.navigation.active}
        >
          {item.name}
        </Component.NavLink>
      ))}

    </div>
  );
};

export default Navigation;
