import React from "react";
import Components from "@components";

export const TemplateSkeleton: React.FC = (): JSX.Element => {
  return (
    <div className="request-skeleton">
      <Components.Skeleton width="100%" height={30} radius={3} />
    </div>
  );
};
