import { Meta, Story } from "@storybook/react";
import React from "react";
import { useEffect, useState } from "react";
import { Checkbox } from "../../../src/Form/Checkbox/Checkbox";
import {
  CheckboxWrapper,
  Props as CheckboxWrapperProps
} from "../../../src/Form/Wrapper/CheckboxWrapper/CheckboxWrapper";
import CheckboxWrapperDocumentation from "./CheckboxWrapper.mdx";

const meta: Meta = {
  title: "components/Inputs/CheckboxWrapper (Wrapper)",
  component: CheckboxWrapper,
  parameters: {
    docs: {
      page: CheckboxWrapperDocumentation
    }
  },
  argTypes: {
    legendId: {
      controls: false,
      table: {
        disable: true
      }
    },
    label: {
      controls: false,
      table: {
        disable: true
      }
    },
    helperProps: {
      controls: false,
      table: {
        disable: true
      }
    },
    onChange: {
      controls: false,
      table: {
        disable: true
      }
    },
    required: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;

const CheckboxesTemplate: Story<CheckboxWrapperProps> = args => {
  const [checkboxStates, setCheckboxStates] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false
  });

  const onChangeHandler = event => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [event.target.value]: !checkboxStates[event.target.value]
    }));
  };

  return (
    <CheckboxWrapper {...args}>
      <Checkbox
        checked={checkboxStates.option1}
        onChange={onChangeHandler}
        name="Option 1"
        value="option1"
      >
        Option 1
      </Checkbox>
      <Checkbox
        checked={checkboxStates.option2}
        onChange={onChangeHandler}
        name="Option 2"
        value="option2"
      >
        Option 2
      </Checkbox>
      <Checkbox
        checked={checkboxStates.option3}
        onChange={onChangeHandler}
        name="Option 3"
        value="option3"
      >
        Option 3
      </Checkbox>
      <Checkbox
        checked={checkboxStates.option4}
        onChange={onChangeHandler}
        name="Option 4"
        value="option4"
      >
        Option 4
      </Checkbox>
      <Checkbox
        checked={checkboxStates.option5}
        onChange={onChangeHandler}
        name="Option 5"
        value="option5"
      >
        Option 5
      </Checkbox>
    </CheckboxWrapper>
  );
};

export const Checkboxes = CheckboxesTemplate.bind({});

Checkboxes.args = {
  name: "Example checkboxes",
  fieldsetProps: {
    legend: "Example fieldset legend",
    legendStyle: "h1",
    hideLegend: false,
    background: "#FFF",
    noPadding: false,
    noBackground: false
  },
  error: false,
  errorMessage: "Please check all the boxes"
};

const NestedTemplate: Story<CheckboxWrapperProps> = args => {
  const [indeterminate, setIndeterminate] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [checkedLaptop, setCheckedLaptop] = useState(false);
  const [checkedTV, setCheckedTV] = useState(false);
  const [checkedMicrophone, setCheckedMicrophone] = useState(false);

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
    <div>
      <CheckboxWrapper {...args}>
        <Checkbox
          indeterminate={indeterminate}
          checked={electronics}
          name="electronics"
          label="Electronics"
          onChange={handleElectronicsOnChange}
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
    </div>
  );
};

export const NestedCheckboxes = NestedTemplate.bind({});

NestedCheckboxes.args = {
  name: "Electronics",
  fieldsetProps: {
    legend: "Example fieldset legend",
    legendStyle: "h1",
    hideLegend: true,
    background: "#FFF",
    noPadding: true,
    noBackground: true
  },
  error: false,
  errorMessage: "Please check all the boxes",
  helperText: "Helpertext for the group"
};
