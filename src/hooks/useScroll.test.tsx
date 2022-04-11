import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useScroll } from './useScroll';

describe('function should be executed', () => {
  it('should execute', () => {
    const scrollHandler = jest.fn();

    const Component = () => {
      useScroll(scrollHandler);
      return <div>Test</div>;
    };

    render(<Component />);

    expect(scrollHandler).not.toBeCalled();
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(scrollHandler).toBeCalledTimes(1);
  });
});
