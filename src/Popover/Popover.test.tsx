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
  show: true,
  placement: { vertical: 'bottom', horizontal: 'start' },
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

  queries.debug();

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
