import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number;
}

const FlexBlock: React.FC<IProps> = (props): JSX.Element => {

  const style = {
    display: "flex",
    flexDirection: props.direction,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    alignContent: props.alignContent,
    flexWrap: props.wrap,
    gap: props.gap
  }

  return (
    <div style={style} className={props.className}>{props.children}</div>
  );
};

export default FlexBlock;
