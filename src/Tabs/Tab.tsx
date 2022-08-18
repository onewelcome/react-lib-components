import React from "react";

export interface Props {
  title: string;
  children?: React.ReactNode;
  selected?: boolean;
  focussed?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  panelRef?: React.RefObject<HTMLDivElement>;
  onTabButtonClick?: () => void;
}

export const Tab = (args: Props) => {
  return (
    <div {...args}>{`A <Tab /> component should only be used inside the <Tabs /> component.`}</div>
  );
};
