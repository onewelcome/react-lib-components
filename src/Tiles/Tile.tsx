import React, { HTMLProps, ReactElement, useState } from 'react';
import { Icon, Icons, Props as IconProps } from '../Icon/Icon';
import classes from './Tile.module.scss';
import readyClasses from '../readyclasses.module.scss';

import { Props as ContextMenuProps } from '../ContextMenu/ContextMenu';
import { generateID } from '../util/helper';
import { Props as IconButtonProps } from '../Button/IconButton';

interface ImageProps {
  src: string;
}

export interface Props extends Omit<HTMLProps<HTMLDivElement>, 'contextMenu'> {
  title: string;
  imageProps?: ImageProps;
  iconProps?: IconProps;
  tileDescription?: string;
  loading?: boolean;
  tileAction?: ReactElement<ContextMenuProps> | ReactElement<IconButtonProps>;
}

export const Tile = ({
  title,
  imageProps,
  iconProps,
  tileDescription,
  className,
  loading,
  tileAction,
  ...rest
}: Props) => {
  const [tileDescriptionID] = useState(generateID(20));

  if (!title) {
    throw new Error('Please make sure to pass a title prop to your Tile component.');
  }

  return (
    <article
      tabIndex={0}
      aria-labelledby={tileDescription ? tileDescriptionID : undefined}
      {...rest}
      className={`${classes['tile']} ${loading ? classes['loading'] : ''}`}
    >
      <header>
        {iconProps && <Icon {...iconProps} className={`${classes['icon']} ${className ?? ''}`} />}
        {tileDescription !== undefined && (
          <span id={tileDescriptionID} className={readyClasses['sr-only']}>
            {tileDescription}
          </span>
        )}
        {tileAction ?? null}
      </header>
      <div className={classes['content']}>
        {imageProps && imageProps.src.length > 0 && (
          <figure className={classes['image']}>{!loading && <img {...imageProps} alt="" />}</figure>
        )}
        {(!imageProps || imageProps.src.length === 0) && (
          <Icon className={classes['placeholder']} icon={Icons.Image} />
        )}
        <span className={classes['title']}>{title}</span>
      </div>
    </article>
  );
};
