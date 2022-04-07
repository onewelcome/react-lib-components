import React from 'react';
import { SnackbarContainer, Props } from './SnackbarContainer';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  placement: { vertical: 'top', horizontal: 'center' },
  children: <span>children</span>,
};

const createSnackbarContainer = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SnackbarContainer {...parameters} data-testid="snackbarcontainer" />);
  const snackbarcontainer = queries.getByTestId('snackbarcontainer');
  return { ...queries, snackbarcontainer };
};

describe('SnackbarContainer should render', () => {
  it('renders without crashing', () => {
    const { snackbarcontainer, getByText } = createSnackbarContainer();
    expect(snackbarcontainer).toHaveClass('top');
    expect(snackbarcontainer).toHaveClass('center');
    expect(snackbarcontainer).toHaveStyle({ zIndex: '' });
    expect(getByText('children')).toBeDefined();
    expect(snackbarcontainer).toBeDefined();
  });

  it('renders with zIndex', () => {
    const { snackbarcontainer } = createSnackbarContainer((defaultParams) => ({
      ...defaultParams,
      zIndex: 1,
    }));
    expect(snackbarcontainer).toHaveStyle({ zIndex: '1' });
  });
});
