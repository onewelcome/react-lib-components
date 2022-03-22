import React, { HTMLProps, ReactElement } from 'react';
import { Icon, Icons } from '../Icon/Icon';
import classes from './Tile.module.scss';

import { Props as ContextMenuProps } from '../ContextMenu/ContextMenu';

interface ImageProps {
  src: string;
  alt: string;
}

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'contextMenu'> {
  title: string;
  imageProps: ImageProps;
  loading?: boolean;
  leftIcon?: Icons;
  menu?: ReactElement<ContextMenuProps>;
}

export const Tile = ({ title, imageProps, loading, leftIcon, menu, ...rest }: Props) => {
  if (!imageProps.src || !imageProps.alt) {
    throw new Error(
      "Please make sure to include a src and alt key value pair in your imageProps object! Example: imageProps: {{ src: 'imagesource', alt: 'alt text for image' }}"
    );
  }

  if (!title) {
    throw new Error('Please make sure to pass a title prop to your Tile component.');
  }

  return (
    <div {...rest} className={`${classes.tile} ${loading ? classes.loading : ''}`}>
      <header>
        {leftIcon && <Icon className={classes.icon} icon={leftIcon} />}
        {menu && menu}
      </header>
      <div className={classes.content}>
        {imageProps.src && imageProps.alt && (
          <figure className={classes.image}>{!loading && <img {...imageProps} />}</figure>
        )}
        <span className={classes.title}>{title}</span>
      </div>
    </div>
  );
};
