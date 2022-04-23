import React from "react";

export const If: React.FC<{
  condition: boolean | undefined;
  anotherChildren?: React.ReactNode;
  children: React.ReactNode;
}> = React.memo(({ condition, anotherChildren, children }) => {
  if (!condition) {
    return <>{anotherChildren ? anotherChildren : null}</>;
  }
  return <>{children}</>;
});
