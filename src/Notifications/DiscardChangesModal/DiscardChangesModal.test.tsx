import React from 'react';
import { DiscardChangesModal, Props } from './DiscardChangesModal';
import { findByTestId, getAllByRole, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultParams: Props = {
  id: 'modal',
  open: true,
  hasUnsavedChanges: jest.fn(),
  onClose: jest.fn(),
  headerProps: {
    title: 'Header',
  },
  discardChangedDialogProps: {
    'data-testid': 'discardChangesDialog',
    discardChangesButtonLabel: 'Discard',
    keepEditingButtonLabel: 'Keep editing',
    contentLabel: 'Unsaved changes',
    titleLabel: 'Dialog',
  },
  children: <span>children</span>,
};

const createDiscardChangesModal = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(<DiscardChangesModal {...parameters} data-testid="discardChangesModal" />);
  const discardChangesModal = queries.getByTestId('discardChangesModal');
  const closeBtn = queries.getByRole('button', { name: 'close modal' });

  return {
    ...queries,
    discardChangesModal,
    closeBtn,
  };
};

const getDiscardChangesButtons = (container: HTMLElement) =>
  getAllByRole(container, 'button', {
    name: new RegExp(
      `(${defaultParams.discardChangedDialogProps.discardChangesButtonLabel}|${defaultParams.discardChangedDialogProps.keepEditingButtonLabel})`
    ),
  });

const findDiscardChangesDialog = (container: HTMLElement) =>
  findByTestId(container, 'discardChangesDialog');

describe('DiscardChangesModal should render', () => {
  it('renders without crashing', () => {
    const { discardChangesModal, container } = createDiscardChangesModal();

    expect(discardChangesModal).toBeDefined();
    expect(discardChangesModal).toHaveTextContent('children');
    expect(discardChangesModal).toHaveTextContent(defaultParams.headerProps.title);
    expect(container).not.toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel);
  });

  it('clicking on close button without making any changes close the modal', () => {
    (
      defaultParams.hasUnsavedChanges as jest.MockedFunction<typeof defaultParams.hasUnsavedChanges>
    ).mockReturnValue(false);
    const { closeBtn } = createDiscardChangesModal();

    userEvent.click(closeBtn);
    expect(defaultParams.onClose).toBeCalledTimes(1);
  });
});

describe('DiscardChangesModal should show DiscardChangesDialog', () => {
  it('showing DiscardChangesDialog and clicking on `keep editing` button', async () => {
    (
      defaultParams.hasUnsavedChanges as jest.MockedFunction<typeof defaultParams.hasUnsavedChanges>
    ).mockReturnValue(true);
    const { closeBtn } = createDiscardChangesModal();
    const container = document.body;
    expect(defaultParams.onClose).not.toBeCalled();

    userEvent.click(closeBtn);

    expect(defaultParams.onClose).not.toBeCalled();
    await findDiscardChangesDialog(container);
    const [_, keepEditingBtn] = getDiscardChangesButtons(container);
    expect(container).toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel);
    expect(container).toHaveTextContent(defaultParams.discardChangedDialogProps.contentLabel);

    userEvent.click(keepEditingBtn);
    expect(defaultParams.onClose).not.toBeCalled();
    await waitFor(() =>
      expect(container).not.toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel)
    );
  });

  it('showing DiscardChangesDialog and clicking on `discard` button', async () => {
    (
      defaultParams.hasUnsavedChanges as jest.MockedFunction<typeof defaultParams.hasUnsavedChanges>
    ).mockReturnValue(true);
    const { closeBtn } = createDiscardChangesModal();
    const container = document.body;

    userEvent.click(closeBtn);

    await findDiscardChangesDialog(container);
    const [discardBtn] = getDiscardChangesButtons(container);
    expect(container).toHaveTextContent(defaultParams.discardChangedDialogProps.titleLabel);

    userEvent.click(discardBtn);
    expect(defaultParams.onClose).toBeCalled();
  });
});
