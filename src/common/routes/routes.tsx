import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import constants from "@constants";
import Component from "@components";
import RouteList from "@routes/route.list";
import Layouts from "@layouts";

const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={<Component.Loading />}>
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
          {/* 1. список заявок */}
          <Route
            path={constants.routes.app.applications}
            element={<RouteList.App.Applications />}
          />
          
          {/* 2. список моих заявок */}
          <Route
            path={constants.routes.app.myApplications}
            element={<RouteList.App.MyApplications />}
          />

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

          {/* 13. 404 в приложении */}
          <Route path="*" element={<>404 в приложении</>} />
        </Route>
      </ReactRouterRoutes>
    </React.Suspense>
  );
};

export default Routes;
