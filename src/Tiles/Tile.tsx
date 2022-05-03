import React, { HTMLProps, ReactElement } from 'react';
import { Icon, Icons, Props as IconProps } from '../Icon/Icon';
import classes from './Tile.module.scss';

import { Props as ContextMenuProps } from '../ContextMenu/ContextMenu';

interface ImageProps {
  src: string;
}

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'contextMenu'> {
  title: string;
  imageProps?: ImageProps;
  iconProps?: IconProps;
  loading?: boolean;
  menu?: ReactElement<ContextMenuProps>;
}

export const Tile = ({
  title,
  imageProps,
  iconProps,
  className,
  loading,
  menu,
  ...rest
}: Props) => {
  if (!title) {
    throw new Error('Please make sure to pass a title prop to your Tile component.');
  }

  return (
    <div {...rest} className={`${classes['tile']} ${loading ? classes['loading'] : ''}`}>
      <header>
        {iconProps && <Icon {...iconProps} className={`${classes['icon']} ${className ?? ''}`} />}
        {menu ?? null}
      </header>
      <div className={classes['content']}>
        {imageProps && imageProps.src.length > 0 && (
          <figure className={classes['image']}>{!loading && <img {...imageProps} />}</figure>
        )}
        {(!imageProps || imageProps.src.length === 0) && (
          <Icon className={classes['placeholder']} icon={Icons.Image} />
        )}
        <span className={classes['title']}>{title}</span>
      </div>
    </div>
  );
};
