import React, { useEffect, useRef } from 'react';
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

describe('ref should work', () => {
  it('should give back the proper data prop, this also checks if the component propagates ...rest properly', () => {
    const ExampleComponent = ({
      propagateRef,
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return (
        <DiscardChangesDialog
          open={false}
          onKeepEditing={jest.fn()}
          onDiscardChanges={jest.fn()}
          discardChangesButtonLabel="test"
          keepEditingButtonLabel="test"
          contentLabel="test"
          titleLabel="test"
          title="test"
          id="test"
          data-ref="testing"
          ref={ref}
        />
      );
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute('data-ref', 'testing');
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});
