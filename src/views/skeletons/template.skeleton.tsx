import React from "react";
import Component from "@components";

export const TemplateSkeleton: React.FC = (): JSX.Element => {
  return (
    <div className="request-skeleton">
      <Component.Skeleton width="100%" height={30} radius={3} />
    </div>
  );
};
