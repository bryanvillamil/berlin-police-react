import React from "react";
import { ContentBikesInfo } from "./styled";

interface containBikeProps {
  children: React.ReactNode;
}

export const LayoutBikes = (props: containBikeProps) => {
  const { children } = props;

  return <ContentBikesInfo>{children}</ContentBikesInfo>;
};
