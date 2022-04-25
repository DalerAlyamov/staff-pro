import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import constants from "@constants";
import Components from "@components";
import RouteList from "@routes/route.list";
import Layouts from "@layouts";

const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={<Components.Loading />}>
      <ReactRouterRoutes>
        {/* 1. авторизация */}
        <Route
          path={constants.routes.auth.login}
          element={<Layouts.AuthLayout />}
        >
          {/* 1. изменение пароля */}
          <Route
            path={constants.routes.auth.changePassword}
            element={<RouteList.Auth.ChangePassword />}
          />

          {/* 2. вход */}
          <Route index element={<RouteList.Auth.Login />} />

          {/* 3. восстановление пароля */}
          <Route
            path={constants.routes.auth.passwordRecovery}
            element={<RouteList.Auth.PasswordRecovery />}
          />

          {/* 4. 404 в авторизации */}
          <Route path="*" element={<>404 в авторизации</>} />
        </Route>

        {/* 2. приложение */}
        <Route path={constants.routes.app.home} element={<Layouts.AppLayout />}>
          {/* 1. список заявок | 2. список моих заявок */}
          <Route path={constants.routes.app.applications}>
            <Route index element={<RouteList.App.Applications />} />
            <Route
              path={constants.routes.app.myApplications}
              element={<RouteList.App.MyApplications />}
            />
          </Route>

          {/* 3. список командировок | 4. командировка (создание/редактирование/просмотр) */}
          <Route path={constants.routes.app.businessTrips}>
            <Route index element={<RouteList.App.BusinessTrips />} />
            <Route
              path={constants.routes.app.businessTrip + ":id"}
              element={<RouteList.App.BusinessTrip />}
            />
          </Route>

          {/* 5. список сотрудников | 6. сотрудник (создание/редактирование/просмотр) */}
          <Route path={constants.routes.app.employees}>
            <Route index element={<RouteList.App.Employees />} />
            <Route
              path={constants.routes.app.employee + ":id"}
              element={<RouteList.App.Employee />}
            />
          </Route>

          {/* 7. список отпусков | 8. отпускная (создание/редактирование/просмотр) */}
          <Route path={constants.routes.app.holidays}>
            <Route index element={<RouteList.App.Holidays />} />
            <Route
              path={constants.routes.app.holiday + ":id"}
              element={<RouteList.App.Holiday />}
            />
          </Route>

          {/* 9. личный кабинет */}
          <Route index element={<RouteList.App.Home />} />

          {/* 10. список уведомлений */}
          <Route
            path={constants.routes.app.notifications}
            element={<RouteList.App.Notifications />}
          />

          {/* 11. список больничных | 12. больничаня (создание/редактирование/просмотр) */}
          <Route path={constants.routes.app.sickLeaveList}>
            <Route index element={<RouteList.App.SickLeaveList />} />
            <Route
              path={constants.routes.app.sickLeave + ":id"}
              element={<RouteList.App.SickLeave />}
            />
          </Route>

          {/* 13. 404 в приложении */}
          <Route path="*" element={<>404 в приложении</>} />
        </Route>
      </ReactRouterRoutes>
    </React.Suspense>
  );
};

export default Routes;
