import React, { useReducer } from 'react';
import { WizardSteps, Props } from './WizardSteps';
import { getAllByRole, getByText, render } from '@testing-library/react';
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
  currentStepNo: 1,
  stepScreenReaderLabel: 'Step',
  mode: 'add',
};

const initParams: Props = {
  onStepClick: jest.fn(),
};

const renderWizardSteps = (initReducerState?: WizardStateType) => {
  const wizardState = initReducerState ? initReducerState : initWizardState;
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
    <Provider initialState={initWizardState}>
      <WizardSteps {...initParams} />
    </Provider>
  );

  return {
    ...renderObj,
    dispatch,
  };
};

const getStepButtons = (container: HTMLElement) => getAllByRole(container, 'button');

describe('WizardSteps', () => {
  it('renders without crashing', () => {
    const { container, dispatch } = renderWizardSteps();
    const buttons = getStepButtons(container);
    (
      initParams.onStepClick as jest.MockedFunction<typeof initParams.onStepClick>
    ).mockReturnValueOnce(true);

    expect(buttons).toHaveLength(4);
    userEvent.click(buttons[0]);
    expect(initParams.onStepClick).toHaveBeenCalledWith(initWizardState.currentStepNo, 0);
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(0));
    expect(buttons[0].querySelector('.checkmark')).toBeDefined();
    expect(getByText(buttons[1], '2')).toBeDefined();
    expect(getByText(buttons[2], '3')).toBeDefined();
    expect(getByText(buttons[3], '4')).toBeDefined();

    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    userEvent.click(buttons[3]);
    expect(initParams.onStepClick).toHaveBeenCalledTimes(1);
  });

  it('should allow to click on future and prev steps but not on current and disabled steps when mode is set to `edit`', () => {
    const { container, dispatch } = renderWizardSteps({ ...initWizardState, mode: 'edit' });
    const buttons = getStepButtons(container);
    (
      initParams.onStepClick as jest.MockedFunction<typeof initParams.onStepClick>
    ).mockReturnValueOnce(true);

    userEvent.click(buttons[3]);
    expect(initParams.onStepClick).toHaveBeenCalledWith(initWizardState.currentStepNo, 3);
    expect(dispatch).toBeCalledWith(changeCurrentStepNo(3));

    userEvent.click(buttons[1]);
    userEvent.click(buttons[2]);
    expect(initParams.onStepClick).toHaveBeenCalledTimes(1);
  });

  it('should do not change step when `onStepClick` callback returns false', () => {
    const { container, dispatch } = renderWizardSteps({ ...initWizardState, mode: 'edit' });
    const buttons = getStepButtons(container);
    (
      initParams.onStepClick as jest.MockedFunction<typeof initParams.onStepClick>
    ).mockReturnValueOnce(false);

    userEvent.click(buttons[3]);
    expect(initParams.onStepClick).toHaveBeenCalledWith(initWizardState.currentStepNo, 3);
    expect(dispatch).not.toBeCalled();
  });
});
