import React from "react";
import { Outlet } from "react-router-dom";
import UI from "@ui";
import Component from '@components';

const AppLayout: React.FC = (): JSX.Element => {
  const [selectedType, setType] = React.useState<string>("Старший инженер");  
  const [list, setList] = React.useState<string[]>([
    "Старший инженер",
    "Логистики",
    "Программист",
    "Менеджер по закупкам",
    "Строитель"
  ]);  

  return (
    <>
      <div className="testtest">
        <Component.WidthLimiter width={350}>
          <UI.Select
            id={1}
            legend="Отдел"
            list={list}
            value={selectedType}
            onChange={setType}
            searchPlaceholder="Поиск по должностям"
          />
        </Component.WidthLimiter>
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
