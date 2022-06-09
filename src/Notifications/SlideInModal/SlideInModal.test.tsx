import React from 'react';
import { SlideInModal } from './SlideInModal';
import { Props } from '../Modal/Modal';
import { render } from '@testing-library/react';

const defaultParams: Props = {
  id: '',
  children: undefined,
  open: false,
};

const createSlideInModal = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<SlideInModal {...parameters} data-testid="SlideInModal" />);
  const slideInModal = queries.getByTestId('SlideInModal');

  return {
    ...queries,
    slideInModal,
  };
};

describe('SlideInModal should render', () => {
  it('renders without crashing', () => {
    const { slideInModal } = createSlideInModal();

    expect(slideInModal).toBeDefined();
  });
});
