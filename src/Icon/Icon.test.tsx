import React from 'react';
import { Icon, Props, Icons } from './Icon';
import { render } from '@testing-library/react';

const createIcon = (params?: Props, iconName = Icons.Calendar) => {
  const queries = render(
    <Icon
      data-testid="icon-component"
      color="rgb(26, 153, 60)"
      icon={iconName}
      {...params}
    />
  );
  const icon = queries.getByTestId('icon-component');

  return {
    ...queries,
    icon,
  };
};

describe('Icon', () => {
  it('renders without crashing', () => {
    const { icon } = createIcon();

    expect(icon).toBeDefined();
    expect(icon).toHaveClass('icon-calendar');
    expect(icon.getAttribute('style')).toBe('color: rgb(26, 153, 60);');
  });
});
