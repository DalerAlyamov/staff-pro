import React from "react";
import { translator } from "@functions";
import styles from "@styles/modules";
import Icon from "@icons";
import Component from "@components";
import constants from '@constants';

interface INotification {
  id: string;
  application_id: string;
  type: 1 | 2; // 1 - командировка, 2 - отпуск
  status: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  date: number;
  date_start: number;
  date_end: number;
  is_read: boolean;
}

const testData: INotification[] = [
  {
    id: "403f81e8-c54e-11ec-9d64-0242ac120002",
    application_id: "403f81e8-c54e-11ec-9d64-0242ac120002",
    type: 1,
    status: 2,
    date: 1651164748884,
    date_start: 1651164748884,
    is_read: false,
    date_end: 1651164748884,
  },
];

const Notifications: React.FC = (): JSX.Element => {
  const [notifications, setNotifications] = React.useState<INotification[]>([]);
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleMouseDown = React.useCallback((e: any) => {
    if (!e.target.closest("." + styles.notifications.root)) setOpen(false);
  }, []);

  React.useEffect(() => {
    setNotifications(testData);
  }, []);

  React.useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown]);

  return (
    <div className={styles.notifications.root}>
      <button
        className={styles.notifications.label}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={styles.notifications.icon}>
          <Icon.Notifications size={22} />
        </div>
        <div className={styles.notifications.redCircle} />
      </button>

      <Component.If condition={isOpen}>
        <div className={styles.notifications.menu}>
          {notifications.map((notification) => {
            const routeWhenClick = notification.type === 1 ? constants.routes.app.businessTrip : constants.routes.app.vacation;
            return (
              <Component.Link 
                key={notification.id} 
                to={routeWhenClick+notification.application_id} 
                className={styles.notifications.item}
                onClick={() => setOpen(false)}
              >
                <div className={styles.notifications.item__titleLeft}>
                  <span>
                    {translator.applicationType.idToName[notification.type]}
                  </span>
                  <span className={styles.notifications.item__date}>
                    {translator.dateFormat.date(notification.date_start)} -{" "}
                    {translator.dateFormat.date(notification.date_end)}
                  </span>
                </div>
                <div className={styles.notifications.item__titleRight}>
                  <span>{translator.status.idToName[notification.status]}</span>
                  <span className={styles.notifications.item__date}>
                    {translator.dateFormat.dayAndMonth(notification.date)}
                  </span>
                </div>
              </Component.Link>
            );
          })}
        </div>
      </Component.If>
    </div>
  );
};

export default Notifications;
