import React, { useReducer } from 'react';
import { WizardActions, Props } from './WizardActions';
import { queryByRole, render } from '@testing-library/react';
import { WizardStateContext, Props as ProviderProps } from '../WizardStateProvider';
import { WizardStateType, reducer, changeCurrentStepNo } from '../wizardStateReducer';
import userEvent from '@testing-library/user-event';

const initWizardState: WizardStateType = {
  steps: [
    {
      label: 'Step 1',
    },
    {
      label: 'Step 2',
    },
    {
      label: 'Step 3',
      disabled: true,
    },
    {
      label: 'Step 4',
    },
  ],
  currentStepNo: 0,
  stepScreenReaderLabel: 'Step',
  mode: 'add',
};

const initParams: Props = {
  cancelButtonLabel: 'Cancel',
  previousButtonLabel: 'Previous',
  nextButtonLabel: 'Next',
  saveAndCloseButtonLabel: 'Save & Close',
  onCancel: jest.fn(),
  onNext: jest.fn(),
  onPrevious: jest.fn(),
  onSaveAndClose: jest.fn(),
};

const renderWizardActions = (initReducerState?: WizardStateType, props?: Props) => {
  const wizardState = initReducerState ? initReducerState : initWizardState;
  const actionsProps = props ? props : initParams;
  const dispatch = jest.fn();

  const Provider = ({ children }: ProviderProps) => {
    const [state] = useReducer(reducer, wizardState);
    return (
      <WizardStateContext.Provider value={{ state, dispatch }}>
        {children}
      </WizardStateContext.Provider>
    );
  };

  const renderObj = render(
    <Provider>
      <WizardActions {...actionsProps} />
    </Provider>
  );

  return {
    ...renderObj,
    dispatch,
  };
};

const getActionsButtons = (container: HTMLElement) => {
  const cancel = queryByRole(container, 'button', { name: initParams.cancelButtonLabel });
  const next = queryByRole(container, 'button', { name: initParams.nextButtonLabel });
  const prev = queryByRole(container, 'button', { name: initParams.previousButtonLabel });
  const save = queryByRole(container, 'button', { name: initParams.saveAndCloseButtonLabel });
  return { cancel, next, prev, save };
};

describe('WizardActions', () => {
  it('renders without crashing', () => {
    const { container, dispatch } = renderWizardActions();
    const { cancel, prev, next, save } = getActionsButtons(container);
    (initParams.onNext as jest.MockedFunction<typeof initParams.onNext>).mockReturnValueOnce(true);

    expect(cancel).toBeDefined();
    cancel && userEvent.click(cancel);
    expect(next).toBeDefined();
    next && userEvent.click(next);
    expect(prev).toBeNull();
    expect(save).toBeNull();

    expect(initParams.onCancel).toBeCalledTimes(1);
    expect(initParams.onNext).toHaveBeenCalledWith(0);
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(1));
  });

  it('should allow going prev and forward when there are prev step and next step (next step is disabled but next one can be used)', () => {
    const { container, dispatch } = renderWizardActions({ ...initWizardState, currentStepNo: 1 });
    const { cancel, prev, next, save } = getActionsButtons(container);
    (initParams.onNext as jest.MockedFunction<typeof initParams.onNext>).mockReturnValueOnce(true);

    expect(prev).toBeDefined();
    prev && userEvent.click(prev);
    expect(initParams.onPrevious).toBeCalled();
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(0));

    expect(next).toBeDefined();
    next && userEvent.click(next);
    expect(initParams.onNext).toHaveBeenCalledWith(1);
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(3));

    expect(cancel).toBeDefined();
    expect(save).toBeNull();
  });

  it('should render save button but not next button when current step is the last step', () => {
    const { container } = renderWizardActions({ ...initWizardState, currentStepNo: 3 });
    const { cancel, prev, next, save } = getActionsButtons(container);

    expect(cancel).toBeDefined();
    expect(prev).toBeDefined();
    expect(next).toBeNull();
    expect(save).toBeDefined();

    save && userEvent.click(save);
    expect(initParams.onSaveAndClose).toHaveBeenCalledWith(3);
  });

  it('should show save and close when next steps are disabled', () => {
    const steps = [
      initWizardState.steps[0],
      { ...initWizardState.steps[1], disabled: true },
      { ...initWizardState.steps[2], disabled: true },
    ];
    const { container } = renderWizardActions({
      ...initWizardState,
      steps: steps,
      currentStepNo: 0,
    });
    const { cancel, prev, next, save } = getActionsButtons(container);

    expect(cancel).toBeDefined();
    expect(prev).toBeNull();
    expect(next).toBeNull();
    expect(save).toBeDefined();

    save && userEvent.click(save);
    expect(initParams.onSaveAndClose).toHaveBeenCalledWith(0);
  });

  it('should show save button on middle step when mode is `edit`', () => {
    const { container } = renderWizardActions({ ...initWizardState, mode: 'edit' });
    const { cancel, prev, next, save } = getActionsButtons(container);

    expect(cancel).toBeDefined();
    expect(prev).toBeNull();
    expect(next).toBeDefined();
    expect(save).toBeDefined();

    save && userEvent.click(save);
    expect(initParams.onSaveAndClose).toHaveBeenCalledWith(0);
  });

  it('should not allow going forward when dev returns false on onNext callback', () => {
    const { container, dispatch } = renderWizardActions();
    const { next } = getActionsButtons(container);
    (initParams.onNext as jest.MockedFunction<typeof initParams.onNext>).mockReturnValueOnce(false);

    next && userEvent.click(next);
    expect(initParams.onNext).toHaveBeenCalledWith(0);
    expect(dispatch).not.toBeCalled();
  });
});
