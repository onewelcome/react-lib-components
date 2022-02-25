import { Meta, Story } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Checkbox } from '../../../src/Form/Checkbox/Checkbox';
import { Button } from '../../../src/Button/Button';
import {
  CheckboxWrapper,
  Props as CheckboxWrapperProps,
} from '../../../src/Form/Wrapper/CheckboxWrapper/CheckboxWrapper';

const meta: Meta = {
  title: 'Form/Wrapper/CheckboxWrapper',
  component: CheckboxWrapper,
};

export default meta;

const NestedTemplate: Story<CheckboxWrapperProps> = (args) => {
  const [indeterminate, setIndeterminate] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [checkedLaptop, setCheckedLaptop] = useState(false);
  const [checkedTV, setCheckedTV] = useState(false);
  const [checkedMicrophone, setCheckedMicrophone] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (checkedLaptop && checkedTV && checkedMicrophone) {
      setElectronics(true);
      setIndeterminate(false);
    } else if (checkedLaptop || checkedTV || checkedMicrophone) {
      setElectronics(false);
      setIndeterminate(true);
    } else {
      setElectronics(false);
      setIndeterminate(false);
    }
  }, [checkedLaptop, checkedTV, checkedMicrophone]);

  const handleElectronicsOnChange = () => {
    setElectronics(!electronics);
    setCheckedLaptop(!electronics);
    setCheckedTV(!electronics);
    setCheckedMicrophone(!electronics);
  };

  const onLaptopCheckHandler = () => {
    console.log('Laptop Checked');
    setCheckedLaptop(!checkedLaptop);
  };

  const onTVCheckHandler = () => {
    console.log('TV Checked');
    setCheckedTV(!checkedTV);
  };

  const onMicrophoneCheckHandler = () => {
    console.log('Microphone Checked');
    setCheckedMicrophone(!checkedMicrophone);
  };

  return (
    <div>
      <CheckboxWrapper
        name="Electronics"
        error={error}
        errorMessage="Please check all the boxes"
        helperText="Helpertext for the group"
        onChange={handleElectronicsOnChange}
      >
        <Checkbox
          indeterminate={indeterminate}
          checked={electronics}
          helperText="This is example helpertext"
          name="electronics"
          label="Electronics"
        >
          <Checkbox
            onChange={onLaptopCheckHandler}
            checked={checkedLaptop}
            helperText="More examples"
            name="laptop"
          >
            Laptop
          </Checkbox>
          <Checkbox onChange={onTVCheckHandler} checked={checkedTV} name="tv">
            TVs
          </Checkbox>
          <Checkbox
            onChange={onMicrophoneCheckHandler}
            checked={checkedMicrophone}
            name="microphones"
          >
            Microphones
          </Checkbox>
        </Checkbox>
      </CheckboxWrapper>
      <Button style={{ marginTop: '20px' }} onClick={() => setError(!error)}>
        Click here to toggle error state
      </Button>
    </div>
  );
};

export const NestedCheckboxes = NestedTemplate.bind({});

NestedCheckboxes.args = {};
