import React from 'react';
import { useBodyClick } from './useBodyClick';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('function should be executed', () => {
  it('should execute', () => {
    const variable = true;
    const clickHandler = jest.fn();
    const validateFunction = jest.fn(() => true);

    const Component = () => {
      useBodyClick(validateFunction, clickHandler, variable);

      return <div>Test</div>;
    };

    const { container } = render(<Component></Component>);

    userEvent.click(container);

    expect(clickHandler).toHaveBeenCalled();
    expect(validateFunction).toHaveBeenCalled();
  });
});
