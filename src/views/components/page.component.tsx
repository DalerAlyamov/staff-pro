import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}

const Page: React.FC<IProps> = (props): JSX.Element => {
  React.useEffect(() => {
    const prevTitle: string = document.title;
    document.title = props.title;
    return () => {
      document.title = prevTitle;
    };
  }, [props.title]);

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Page;
