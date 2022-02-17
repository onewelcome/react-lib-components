import { Meta, Story } from "@storybook/react";
import { useEffect, useState } from "react";
import { Checkbox } from "../../src/Form/Checkbox/Checkbox";
import { CheckboxGroup, Props as CheckboxGroupProps } from "../../src/Form/CheckboxGroup/CheckboxGroup";

const meta: Meta = {
  title: "CheckboxGroup",
  component: CheckboxGroup,
};

export default meta;

const NestedTemplate: Story<CheckboxGroupProps> = (args) => {
  const [indeterminate, setIndeterminate] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [checkedLaptop, setCheckedLaptop] = useState(false);
  const [checkedTV, setCheckedTV] = useState(false);
  const [checkedMicrophone, setCheckedMicrophone] = useState(false);

  const handleGroupOnChange = () => {
    console.log("GROUP CHANGE");
  };

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
    console.log("Laptop Checked");
    setCheckedLaptop(!checkedLaptop);
  };

  const onTVCheckHandler = () => {
    console.log("TV Checked");
    setCheckedTV(!checkedTV);
  };

  const onMicrophoneCheckHandler = () => {
    console.log("Microphone Checked");
    setCheckedMicrophone(!checkedMicrophone);
  };

  return (
    <CheckboxGroup {...args} errorMessage="Please check all the boxes" helperText="Helpertext for the group" onChange={handleGroupOnChange}>
      <Checkbox
        onCheck={handleElectronicsOnChange}
        indeterminate={indeterminate}
        checked={electronics}
        helperText="This is example helpertext"
        name="electronics"
        label="Electronics"
      >
        <Checkbox onCheck={onLaptopCheckHandler} checked={checkedLaptop} helperText="More examples" name="laptop">
          Laptop
        </Checkbox>
        <Checkbox onCheck={onTVCheckHandler} checked={checkedTV} name="tv">
          TVs
        </Checkbox>
        <Checkbox onCheck={onMicrophoneCheckHandler} checked={checkedMicrophone} name="microphones">
          Microphones
        </Checkbox>
      </Checkbox>
    </CheckboxGroup>
  );
};

export const NestedCheckboxes = NestedTemplate.bind({});

NestedCheckboxes.args = {};
