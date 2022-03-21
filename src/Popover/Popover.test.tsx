import React from 'react';
import { Popover, Props } from './Popover';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  children: (
    <ul>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </ul>
  ),
  show: false,
  placement: { vertical: 'top', horizontal: 'start' },
};

const createPopover = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }

  let button = document.createElement('button');
  button.innerText = 'test';
  button.style.height = '200px';
  button.style.width = '400px';

  const queries = render(
    <div>
      <Popover {...parameters} anchorEl={button} data-testid="popover" />
    </div>
  );

  const popover = queries.getByTestId('popover');
  return {
    ...queries,
    popover,
  };
};

describe('Popover should render', () => {
  it('renders without crashing and has default left and top attributes', () => {
    const { popover } = createPopover();

    expect(popover).toBeTruthy();
  });
});

describe('Popover props', () => {
  it('should render if show is set to true', () => {
    const { popover } = createPopover((defaultParams) => ({ ...defaultParams, show: true }));

    expect(popover.querySelector('.popover')).toBeTruthy();
  });

  it('should have left and top value defined', () => {
    const { popover } = createPopover((defaultParams) => ({ ...defaultParams, show: true }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', left: '0px' });
  });

  it('should have right and top value defined', () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      placement: { vertical: 'center', horizontal: 'end' },
      transformOrigin: 'right',
      show: true,
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', right: '1024px' });
  });
});
