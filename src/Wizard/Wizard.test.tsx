import React, { useState } from 'react';
import { Wizard, Props } from './Wizard';
import {
  getAllByRole,
  getByText,
  render,
  getByTestId,
  queryByRole,
  findByText,
} from '@testing-library/react';
import { WizardActions, WizardSteps } from '..';
import userEvent from '@testing-library/user-event';

type initWizardPropsType = Omit<Omit<Props, 'onStepChange'>, 'children'>;

const initWizardParams: initWizardPropsType = {
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
  initialStepNo: 0,
  stepScreenReaderLabel: 'Step',
  mode: 'add',
};

const initWizardStepsProps = {
  onStepClick: jest.fn(),
};

const initWizardActionsProps = {
  onNext: jest.fn(),
  onCancel: jest.fn(),
  onSaveAndClose: jest.fn(),
  cancelButtonLabel: 'Cancel',
  previousButtonLabel: 'Previous',
  nextButtonLabel: 'Next',
  saveAndCloseButtonLabel: 'Save & close',
};

const renderWizard = (wizardProps?: initWizardPropsType) => {
  const customWizardProps = wizardProps ? wizardProps : initWizardParams;

  const Content = () => {
    const [step, setStep] = useState(customWizardProps.initialStepNo || 0);

    return (
      <Wizard {...customWizardProps} onStepChange={(stepNo: number) => setStep(stepNo)}>
        <WizardSteps data-testid="wizard-steps" {...initWizardStepsProps} />
        <div data-testid="wizard-content">Step {step + 1}</div>
        <div data-testid="wizard-actions">
          <WizardActions {...initWizardActionsProps} />
        </div>
      </Wizard>
    );
  };

  return render(<Content />);
};

const getWizardContent = (container: HTMLElement) => getByTestId(container, 'wizard-content');

const getStepButtons = (container: HTMLElement) =>
  getAllByRole(getByTestId(container, 'wizard-steps'), 'button');

const getActionsButtons = (container: HTMLElement) => {
  const actionsContainer = getByTestId(container, 'wizard-actions');
  const cancel = queryByRole(actionsContainer, 'button', {
    name: initWizardActionsProps.cancelButtonLabel,
  });
  const next = queryByRole(actionsContainer, 'button', {
    name: initWizardActionsProps.nextButtonLabel,
  });
  const prev = queryByRole(actionsContainer, 'button', {
    name: initWizardActionsProps.previousButtonLabel,
  });
  const save = queryByRole(actionsContainer, 'button', {
    name: initWizardActionsProps.saveAndCloseButtonLabel,
  });
  return { cancel, next, prev, save };
};

describe('Wizard', () => {
  it('renders without crashing', () => {
    const { container } = renderWizard();
    const { cancel, prev, next, save } = getActionsButtons(container);
    const stepButtons = getStepButtons(container);
    const wizardContent = getWizardContent(container);

    expect(stepButtons).toHaveLength(4);
    expect(getByText(stepButtons[0], '1')).toBeDefined();
    expect(getByText(stepButtons[1], '2')).toBeDefined();
    expect(getByText(stepButtons[2], '3')).toBeDefined();
    expect(getByText(stepButtons[3], '4')).toBeDefined();
    expect(wizardContent).toHaveTextContent('Step 1');
    expect(cancel).toBeDefined();
    expect(next).toBeDefined();
    expect(prev).toBeNull();
    expect(save).toBeNull();
  });

  it('should be able to click over whole wizard via action buttons', async () => {
    const { container } = renderWizard();
    const { next } = getActionsButtons(container);
    const wizardContent = getWizardContent(container);
    (
      initWizardActionsProps.onNext as jest.MockedFunction<typeof initWizardActionsProps.onNext>
    ).mockReturnValue(true);

    await findByText(wizardContent, 'Step 1');
    next && userEvent.click(next);
    await findByText(wizardContent, 'Step 2');
    next && userEvent.click(next);
    await findByText(wizardContent, 'Step 4');
    const { save, prev, cancel } = getActionsButtons(container);
    save && userEvent.click(save);
    expect(initWizardActionsProps.onSaveAndClose).toBeCalledWith(3);
    prev && userEvent.click(prev);
    await findByText(wizardContent, 'Step 2');
    prev && userEvent.click(prev);
    await findByText(wizardContent, 'Step 1');
    cancel && userEvent.click(cancel);
    expect(initWizardActionsProps.onCancel).toBeCalledTimes(1);
  });

  it('should not be able to click over whole wizard via steps buttons in add mode', async () => {
    const { container } = renderWizard();
    const { next } = getActionsButtons(container);
    const stepsButtons = getStepButtons(container);
    const wizardContent = getWizardContent(container);
    (
      initWizardActionsProps.onNext as jest.MockedFunction<typeof initWizardActionsProps.onNext>
    ).mockReturnValue(true);
    (
      initWizardStepsProps.onStepClick as jest.MockedFunction<
        typeof initWizardStepsProps.onStepClick
      >
    ).mockReturnValue(true);

    userEvent.click(stepsButtons[1]);
    userEvent.click(stepsButtons[2]);
    userEvent.click(stepsButtons[3]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(0);
    await findByText(wizardContent, 'Step 1');

    next && userEvent.click(next);
    next && userEvent.click(next);
    await findByText(wizardContent, 'Step 4');
    userEvent.click(stepsButtons[2]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(0);
    userEvent.click(stepsButtons[1]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(1);
    await findByText(wizardContent, 'Step 2');
    userEvent.click(stepsButtons[0]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(2);
    await findByText(wizardContent, 'Step 1');
  });

  it('should be able to click over whole wizard via steps buttons in edit mode', async () => {
    const { container } = renderWizard({ ...initWizardParams, mode: 'edit' });
    const stepsButtons = getStepButtons(container);
    const wizardContent = getWizardContent(container);
    (
      initWizardStepsProps.onStepClick as jest.MockedFunction<
        typeof initWizardStepsProps.onStepClick
      >
    ).mockReturnValue(true);

    userEvent.click(stepsButtons[1]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(1);
    await findByText(wizardContent, 'Step 2');
    userEvent.click(stepsButtons[2]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(1);
    userEvent.click(stepsButtons[3]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(2);
    await findByText(wizardContent, 'Step 4');

    userEvent.click(stepsButtons[2]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(2);
    userEvent.click(stepsButtons[1]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(3);
    await findByText(wizardContent, 'Step 2');
    userEvent.click(stepsButtons[0]);
    expect(initWizardStepsProps.onStepClick).toBeCalledTimes(4);
    await findByText(wizardContent, 'Step 1');
  });
});
