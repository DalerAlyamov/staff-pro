import React from "react";

interface IProps {
  condition: boolean | undefined;
  anotherChildren?: React.ReactNode;
  children: React.ReactNode;
}

const If: React.FC<IProps> = React.memo((props) => {
  if (!props.condition) {
    return <>{props.anotherChildren ? props.anotherChildren : null}</>;
  }
  return <>{props.children}</>;
});

export default If;
