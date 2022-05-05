import React from "react";
import constants from '@constants';
import { history } from '@utilities/history.utility';
import { LSTokenName } from '@utilities/locastorage.utility';
import { useLocation } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
}

const appPathList: ReadonlyArray<string> = Object.values(constants.routes.app);
const authPathList: ReadonlyArray<string> = Object.values(constants.routes.auth);

export const RouteController: React.FC<IProps> = React.memo(
  (props): JSX.Element => {
    const { pathname } = useLocation();

    const token: string | null = localStorage.getItem(LSTokenName) || null;

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      if (authPathList.includes(pathname) && token) {
        history.push(constants.routes.app.home);
      } else if (!authPathList.includes(pathname) && !token) {
        history.push(constants.routes.auth.login);
      }
      setLoading(false);
    }, [pathname, token]);

    if (loading) return <></>
    return <React.Fragment>{props.children}</React.Fragment>
  }
);
