import React, { HTMLProps, ReactNode } from 'react';
import classes from './Tiles.module.scss';
import { Tile } from './Tile';

export interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  loading?: boolean;
  grid?: 1 | 2 | 3;
}

export const Tiles = ({ children, className, loading = false, grid = 3, ...rest }: Props) => {
  const renderChildren = () => {
    if (loading) {
      return [
        <Tile
          key="placeholder1"
          title="placeholder"
          imageProps={{ src: 'placeholder', alt: 'placeholder' }}
          loading={true}
        />,
        <Tile
          key="placeholder2"
          title="placeholder"
          imageProps={{ src: 'placeholder', alt: 'placeholder' }}
          loading={true}
        />,
        <Tile
          key="placeholder3"
          title="placeholder"
          imageProps={{ src: 'placeholder', alt: 'placeholder' }}
          loading={true}
        />,
      ];
    }

    return children;
  };

  return (
    <div
      {...rest}
      className={`${classes['tiles']} ${classes['grid-' + grid.toString()]} ${className ?? ''}`}
      aria-live="polite"
      aria-busy={loading}
    >
      {renderChildren()}
    </div>
  );
};
