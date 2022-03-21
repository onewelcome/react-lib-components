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

  let button = (
    <button style={{ height: '500px' }} data-testid="button">
      Test
    </button>
  );

  const queries = render(<div>{button}</div>);

  const queriedButton = queries.getByTestId('button');

  /**
   * We are kind of hacking here. Since jest doesn't actually render the element in a DOM it doesn't have an offsetHeight and offsetWidth property (which we use inside of Popover to calculate the proper position). In order to properly
   * test this, we hack in the offset height and width of 500 so we can actually test it.
   */
  Object.defineProperty(queriedButton, 'offsetHeight', { configurable: true, value: 500 });
  Object.defineProperty(queriedButton, 'offsetWidth', { configurable: true, value: 500 });

  const popoverel = <Popover {...parameters} anchorEl={queriedButton} data-testid="popover" />;

  queries.rerender(
    <div>
      {button}
      {popoverel}
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

  it("it's positioned top left", () => {
    const { popover } = createPopover((defaultParams) => ({ ...defaultParams, show: true }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', left: '0px' });
  });

  it("it's positioned middle left", () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      show: true,
      placement: { vertical: 'center', horizontal: 'start' },
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '250px', left: '0px' });
  });

  it("it's positioned bottom left", () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      show: true,
      placement: { vertical: 'bottom', horizontal: 'start' },
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '500px', left: '0px' });
  });

  it("it's positioned top center", () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      placement: { vertical: 'top', horizontal: 'center' },
      show: true,
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', left: '250px' });
  });

  it("it's positioned top end", () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      placement: { vertical: 'top', horizontal: 'end' },
      show: true,
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', left: '500px' });
  });

  it('transform origin is set to right and horizontally positioned to the end', () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      placement: { vertical: 'top', horizontal: 'end' },
      transformOrigin: 'right',
      show: true,
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', right: '1024px' });
  });

  it('transform origin is set to right and horizontally positioned to the center', () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      placement: { vertical: 'top', horizontal: 'center' },
      transformOrigin: 'right',
      show: true,
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', right: '1274px' });
  });

  it('transform origin is set to right and horizontally positioned to the start', () => {
    const { popover } = createPopover((defaultParams) => ({
      ...defaultParams,
      placement: { vertical: 'top', horizontal: 'start' },
      transformOrigin: 'right',
      show: true,
    }));

    expect(popover.querySelector('.popover')).toHaveStyle({ top: '0px', right: '1524px' });
  });

  it('should throw an error', () => {
    // Prevent throwing an error in the console when this test is executed. We fix this and the end of this test.
    const err = console.error;
    console.error = jest.fn();

    let actual;

    try {
      render(<Popover />);
    } catch (e: any) {
      actual = e.message;
    }

    const expected = 'Please make sure to define the "show" property on your Popover component';

    expect(actual).toEqual(expected);

    console.error = err;
  });
});
