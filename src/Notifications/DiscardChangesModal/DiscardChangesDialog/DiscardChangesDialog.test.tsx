import React from 'react';
import { DiscardChangesDialog, Props } from './DiscardChangesDialog';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  open: true,
  onKeepEditing: jest.fn(),
  onDiscardChanges: jest.fn(),
  discardChangesButtonLabel: 'Discard Changes',
  keepEditingButtonLabel: 'Keep Editing',
  contentLabel: 'Content',
  titleLabel: 'Unsaved changes',
};

const createDiscardChangesDialog = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <DiscardChangesDialog {...parameters} data-testid="DiscardChangesDialog"></DiscardChangesDialog>
  );
  const discardChangesDialog = queries.getByTestId('DiscardChangesDialog');
  const discardChangesBtn = queries.getByRole('button', {
    name: defaultParams.discardChangesButtonLabel,
  });
  const keepEditingBtn = queries.getByRole('button', {
    name: defaultParams.keepEditingButtonLabel,
  });

  return {
    ...queries,
    discardChangesDialog,
    discardChangesBtn,
    keepEditingBtn,
  };
};

describe('DiscardChangesDialog should render', () => {
  it('renders without crashing', () => {
    const { discardChangesDialog, discardChangesBtn, keepEditingBtn } =
      createDiscardChangesDialog();

    expect(discardChangesDialog).toBeDefined();
    expect(discardChangesDialog).toHaveTextContent(defaultParams.contentLabel);
    expect(discardChangesDialog).toHaveTextContent(defaultParams.titleLabel);

    userEvent.click(discardChangesBtn);
    expect(defaultParams.onDiscardChanges).toBeCalledTimes(1);

    userEvent.click(keepEditingBtn);
    expect(defaultParams.onKeepEditing).toBeCalledTimes(1);
  });
});
