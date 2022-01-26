import React, { Fragment } from 'react';
import { BaseStyling } from './BaseStyling';
import { Button } from '../Button/Button';
import { render } from '@testing-library/react';

describe('BaseStyling should render', () => {
  it('renders without crashing', async () => {
    const { container, findByTestId } = render(
      <Fragment>
        <BaseStyling>
          <Button data-testid="button">Test</Button>
        </BaseStyling>
      </Fragment>
    );

    const button = await findByTestId('button');
    expect(button).toHaveStyle({ backgroundColor: 'rgb(158, 0, 107);' });
    expect(container.querySelector('#child')).toBeDefined();
  });
});

describe('Should override default color', () => {
  it('overrides primary color', async () => {
    const { findByTestId } = render(
      <Fragment>
        <BaseStyling
          properties={{
            colorPrimary: 'rgb(255, 255, 255);',
          }}
        >
          <Button data-testid="button">Test</Button>
        </BaseStyling>
      </Fragment>
    );

    const button = await findByTestId('button');
    expect(button).toHaveStyle({ backgroundColor: 'rgb(255, 255, 255);' });
  });
});
