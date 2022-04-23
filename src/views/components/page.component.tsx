import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}

const Page: React.FC<IProps> = ({ title, children }): JSX.Element => {
  React.useEffect(() => {
    const prevTitle: string = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  }, [title]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Page;
