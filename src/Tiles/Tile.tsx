import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ReactElement,
  useState,
} from 'react';
import { Icon, Icons } from '../Icon/Icon';
import classes from './Tile.module.scss';
import readyClasses from '../readyclasses.module.scss';

import { Props as ContextMenuProps } from '../ContextMenu/ContextMenu';
import { generateID } from '../util/helper';
import { Props as IconButtonProps } from '../Button/IconButton';

interface ImageProps extends ComponentPropsWithoutRef<'img'> {
  src: string;
}

export interface Props extends ComponentPropsWithRef<'div'> {
  title: string;
  imageProps?: ImageProps;
  enabled?: boolean;
  loading?: boolean;
  tileAction?: ReactElement<ContextMenuProps> | ReactElement<IconButtonProps>;
}

export const Tile = React.forwardRef<HTMLDivElement, Props>(
  ({ title, imageProps, enabled, className, loading, tileAction, ...rest }: Props, ref) => {
    const [tileDescriptionID] = useState(generateID(20));

    if (!title) {
      throw new Error('Please make sure to pass a title prop to your Tile component.');
    }

    const statusMessage = () => {
      if (enabled) {
        return 'Status: enabled';
      }

      return 'Status: disabled';
    };

    return (
      <article
        {...rest}
        tabIndex={0}
        aria-labelledby={tileDescriptionID}
        ref={ref}
        className={`${classes['tile']} ${loading ? classes['loading'] : ''}`}
      >
        <header style={{ justifyContent: enabled === undefined ? 'flex-end' : 'space-between' }}>
          {enabled === true && (
            <Icon
              color="var(--success)"
              icon={Icons.Checkmark}
              className={`${classes['icon']} ${className ?? ''}`}
            />
          )}
          {enabled === false && (
            <Icon
              color="var(--greyed-out)"
              icon={Icons.Forbidden}
              className={`${classes['icon']} ${className ?? ''}`}
            />
          )}
          {enabled !== undefined && (
            <span id={tileDescriptionID} className={readyClasses['sr-only']}>
              {`${title}. ${statusMessage()}`}
            </span>
          )}
          {tileAction ?? null}
        </header>
        <div className={classes['content']}>
          {imageProps && imageProps.src.length > 0 && (
            <figure className={classes['image']}>
              {!loading && <img {...imageProps} alt="" />}
            </figure>
          )}
          {(!imageProps || imageProps.src.length === 0) && (
            <Icon className={classes['placeholder']} icon={Icons.Image} />
          )}
          <span className={classes['title']}>{title}</span>
        </div>
      </article>
    );
  }
);
