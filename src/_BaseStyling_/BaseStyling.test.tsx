import React, { Fragment } from 'react';
import { BaseStyling } from './BaseStyling';
import { render } from '@testing-library/react';

describe('BaseStyling should render', () => {
  it('renders without crashing', async () => {
    const { container } = render(
      <Fragment>
        <BaseStyling>
          <div id="child">Test</div>
        </BaseStyling>
      </Fragment>
    );

    expect(container.querySelector('#child')).toBeDefined();
  });
});
