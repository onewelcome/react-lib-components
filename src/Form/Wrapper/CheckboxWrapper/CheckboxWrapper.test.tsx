import React from 'react';
import { CheckboxWrapper, Props } from './CheckboxWrapper';
import { Checkbox, CheckboxProps } from '../../Checkbox/Checkbox';
import { render } from '@testing-library/react';

const createCheckboxWrapper = (params?: Props, parentParams?: CheckboxProps) => {
  const queries = render(
    <CheckboxWrapper
      onChange={jest.fn()}
      errorMessage="This is an error"
      error={false}
      helperText="Helpertext"
      name="Checkboxwrapper"
      fieldsetProps={{ title: 'Example title' }}
      label="Label"
      {...params}
    >
      <Checkbox
        indeterminate={parentParams?.indeterminate || false}
        name={parentParams?.name || 'parentcheckbox'}
        label={parentParams?.label || 'parentcheckbox'}
        data-testid="parentcheckbox"
        {...parentParams}
      >
        <Checkbox checked={true} name="checkbox2">
          Checkbox 2
        </Checkbox>
        <Checkbox name="checkbox3">Checkbox 3</Checkbox>
      </Checkbox>
    </CheckboxWrapper>
  );
  const checkboxwrapper = queries.container.querySelector('.wrapper');
  const parentcheckbox = queries.getByTestId('parentcheckbox');

  return {
    ...queries,
    checkboxwrapper,
    parentcheckbox,
  };
};

describe('checkboxwrapper should render', () => {
  it('renders without crashing', () => {
    const { checkboxwrapper } = createCheckboxWrapper();
    expect(checkboxwrapper).toBeTruthy();
  });
});

describe('CheckboxWrapper should have an error', () => {
  it('should have an error and the children checkboxes should have aria-describedby of the error message of the group.', () => {
    const { checkboxwrapper } = createCheckboxWrapper({
      onChange: jest.fn(),
      errorMessage: 'This is an error',
      error: true,
      helperText: 'Helpertext',
      name: 'Checkboxwrapper',
      label: 'Label',
      children: (
        <Checkbox name="placeholder checkbox" checked={false}>
          Placeholder
        </Checkbox>
      ),
    });

    const checkboxes = checkboxwrapper?.querySelectorAll('.checkbox-container input');
    const errorMessage = checkboxwrapper?.querySelector('.default-helper .error-message .message');

    /** All of the children checkboxes should be described by the error message in the parent checkbox group. */
    checkboxes?.forEach((box) => {
      expect(box.getAttribute('aria-describedby')).toBe(errorMessage?.getAttribute('id'));
    });

    expect(checkboxes?.length).toBe(3);
    expect(errorMessage).toHaveTextContent('This is an error');
  });
});

describe('Parent checkbox attributes', () => {
  it('is indeterminate, label is set', () => {
    const { parentcheckbox, container } = createCheckboxWrapper(undefined, {
      indeterminate: true,
      name: 'parentcheckbox',
      label: 'testlabel',
      children: '',
    });

    expect(parentcheckbox.getAttribute('aria-checked')).toBe('mixed');
    expect(
      container.querySelector(`label[for="${parentcheckbox.getAttribute('id')}"]`)
    ).toHaveTextContent('testlabel');
  });
});
