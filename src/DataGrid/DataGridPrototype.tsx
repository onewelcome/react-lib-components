import React, { Fragment } from 'react';
import { Icon, Icons } from '../Icon/Icon';
import { Direction } from './interfaces';
import classes from './DataGridPrototype.module.scss';
import { ContextMenuItem } from '../ContextMenu/ContextMenuItem';
import { IconButton } from '../Button/IconButton';
import { ContextMenu } from '../ContextMenu/ContextMenu';

const data = [
  {
    firstName: 'Adyen',
    creationDate: new Date(),
    identifier: '1343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen2',
    creationDate: new Date(),
    identifier: '2343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen3',
    creationDate: new Date(),
    identifier: '3343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen4',
    creationDate: new Date(),
    identifier: '4343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen5',
    creationDate: new Date(),
    identifier: '5343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen6',
    creationDate: new Date(),
    identifier: '6343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen7',
    creationDate: new Date(),
    identifier: '7343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen8',
    creationDate: new Date(),
    identifier: '8343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
  {
    firstName: 'Adyen9',
    creationDate: new Date(),
    identifier: '9343454435435435-43543534534-34543543',
    type: 'Stock',
    enabled: 'Yes',
  },
];

export const DataGridPrototype = () => {
  const sortingIndicator = (activeSortDirection?: Direction) => {
    const getSortingIndicatorClasses = (direction: Direction) => {
      const sortingIndicatorClasses = [classes['indicator']];
      if (activeSortDirection) {
        if (activeSortDirection === direction) {
          sortingIndicatorClasses.push(classes['active']);
        } else {
          sortingIndicatorClasses.push(classes['hidden']);
        }
      }
      return sortingIndicatorClasses;
    };

    return (
      <Fragment>
        <Icon className={getSortingIndicatorClasses('ASC').join(' ')} icon={Icons.TriangleUp} />
        <Icon className={getSortingIndicatorClasses('DESC').join(' ')} icon={Icons.TriangleDown} />
      </Fragment>
    );
  };

  const onMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target);
  };

  const rows = data.map((item) => (
    <Fragment key={item.identifier}>
      <div className={classes['body-cell']}>{item.firstName}</div>
      <div className={classes['body-cell']}>{item.creationDate.toLocaleDateString()}</div>
      <div className={classes['body-cell']} onMouseOver={onMouseOver}>
        {item.identifier}
      </div>
      <div className={classes['body-cell']}>{item.type}</div>
      <div className={classes['body-cell']}>{item.enabled}</div>
      <div className={classes['body-cell']}>
        <ContextMenu
          trigger={
            <IconButton color="default" title="click me for contextmenu">
              <Icon icon={Icons.EllipsisAlt} />
            </IconButton>
          }
          id={`content-menu_${item.identifier}`}
        >
          <ContextMenuItem onClick={() => console.log('test')}>Example item 1</ContextMenuItem>
        </ContextMenu>
      </div>
    </Fragment>
  ));

  return (
    <div>
      <div className={classes['header']}>
        <div className={classes['header-cell']}>
          <span className={classes['headline']}>Name</span>
          <div className={classes['sorting-indicator-container']}>{sortingIndicator('ASC')}</div>
        </div>
        <div className={classes['header-cell']}>
          <span className={classes['headline']}>Created</span>
          <div className={classes['sorting-indicator-container']}>{sortingIndicator('DESC')}</div>
        </div>
        <div className={classes['header-cell']}>
          <span className={classes['headline']}>Identifier</span>
          <div className={classes['sorting-indicator-container']}>{sortingIndicator()}</div>
        </div>
        <div className={classes['header-cell']}>
          <span className={classes['headline']}>Type</span>
          <div className={classes['sorting-indicator-container']}>{sortingIndicator()}</div>
        </div>
        <div className={classes['header-cell']}>
          <span className={classes['headline']}>Enabled</span>
          <div className={classes['sorting-indicator-container']}>{sortingIndicator()}</div>
        </div>
        <div className={classes['header-cell']}></div>
      </div>
      <div className={classes['body']}>{rows}</div>
    </div>
  );
};
