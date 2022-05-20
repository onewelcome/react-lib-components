import React from 'react';

export interface Props {
  title: string;
  children?: React.ReactNode;
  selected?: boolean;
  focussed?: boolean;
  onTabButtonClick?: () => void;
}

export class Tab extends React.Component<Props> {}
