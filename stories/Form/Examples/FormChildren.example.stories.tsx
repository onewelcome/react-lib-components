/*
 * Copyright 2022 OneWelcome B.V.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  FormControl as FormControlComponent,
  Props
} from "../../../src/components/Form/FormControl/FormControl";
import { Form } from "../../../src/components/Form/Form";
import { RadioWrapper } from "../../../src/components/Form/Wrapper/RadioWrapper/RadioWrapper";
import { Checkbox } from "../../../src/components/Form/Checkbox/Checkbox";
import { CheckboxWrapper } from "../../../src/components/Form/Wrapper/CheckboxWrapper/CheckboxWrapper";
import { InputWrapper } from "../../../src/components/Form/Wrapper/InputWrapper/InputWrapper";
import { Radio } from "../../../src/components/Form/Radio/Radio";
import { Fieldset } from "../../../src/components/Form/Fieldset/Fieldset";

const meta: Meta = {
  component: FormControlComponent,
  parameters: {
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      },
      control: false
    },
    grid: {
      options: [1, 2, 3],
      control: "radio"
    },
    align: {
      options: ["start", "center", "end", "stretch"],
      control: "radio"
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const [selectValue, setSelectValue] = useState("option1");
  const [prefix, setPrefix] = useState("mr");
  const [preferredMobileDevice, setPreferredMobileDevice] = useState("mobile");
  const [newsletter, setNewsletter] = useState(true);
  const [electronics, setElectronics] = useState({
    indeterminate: false,
    checked: false,
    tv: false,
    mobile: false,
    laptop: false
  });
  const [inputValue, setInputValue] = useState("");

  const onSelectChange = event => {
    setSelectValue(event.target.value);
  };

  const prefixChangeHandler = event => {
    setPrefix(event.target.value);
  };

  const prefixClearHandler = () => {
    setPrefix("");
  };

  const onNewsletterChangeHandler = () => {
    setNewsletter(!newsletter);
  };

  useEffect(() => {
    if (!electronics.tv && !electronics.mobile && !electronics.laptop) {
      setElectronics(prevState => {
        return { ...prevState, indeterminate: false, checked: false };
      });
    }

    if (
      electronics.tv ||
      electronics.mobile ||
      (electronics.laptop && !(electronics.tv && electronics.mobile && electronics.laptop))
    ) {
      setElectronics(prevState => {
        return { ...prevState, indeterminate: true };
      });
    }

    if (electronics.tv && electronics.mobile && electronics.laptop) {
      setElectronics(prevState => {
        return { ...prevState, indeterminate: false, checked: true };
      });
    }
  }, [electronics.tv, electronics.laptop, electronics.mobile]);

  const handleElectronicsOnChange = () => {
    setElectronics(prevState => {
      return {
        ...prevState,
        mobile: !prevState.checked,
        tv: !prevState.checked,
        laptop: !prevState.checked
      };
    });
  };

  const handleTVOnChange = () => {
    setElectronics(prevState => {
      return { ...prevState, tv: !prevState.tv };
    });
  };

  const handleMobileOnChange = () => {
    setElectronics(prevState => {
      return { ...prevState, mobile: !prevState.mobile };
    });
  };

  const handleLaptopOnChange = () => {
    setElectronics(prevState => {
      return { ...prevState, laptop: !prevState.laptop };
    });
  };

  return (
    <Form style={{ padding: "20px", backgroundColor: "#F5F8F8" }}>
      <FormControlComponent {...args}>
        <RadioWrapper
          error={false}
          errorMessage="Error message"
          value={preferredMobileDevice}
          name="electronics"
          onChange={e => setPreferredMobileDevice(e.target.value)}
          helperText="This is helper text"
          fieldsetProps={{ legend: "Radio legend", legendStyle: "body-bold" }}
        >
          <Radio value="mobile">Mobile</Radio>
          <Radio value="tv">TV</Radio>
          <Radio value="pc">PC</Radio>
        </RadioWrapper>
        <CheckboxWrapper
          error={false}
          errorMessage="Error message"
          name="electronics"
          helperText="This is helper text"
          fieldsetProps={{ legend: "Electronics legend", legendStyle: "body-bold" }}
        >
          <Checkbox
            onChange={handleElectronicsOnChange}
            checked={electronics.checked}
            indeterminate={electronics.indeterminate}
            name="electronics"
            label="Electronics"
          >
            <Checkbox onChange={handleTVOnChange} checked={electronics.tv} name="tv">
              TV
            </Checkbox>
            <Checkbox onChange={handleMobileOnChange} checked={electronics.mobile} name="mobile">
              Mobile
            </Checkbox>
            <Checkbox onChange={handleLaptopOnChange} checked={electronics.laptop} name="laptop">
              Laptop
            </Checkbox>
          </Checkbox>
        </CheckboxWrapper>
        <Fieldset legend="Arbitrary input" legendStyle="body-bold">
          <InputWrapper
            helperText="Helper text for this field. Description should be short and not repeat the label"
            name="input1"
            errorMessage={"This is an error"}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            error={false}
            label="Label for this inputfield"
          />
        </Fieldset>
      </FormControlComponent>
    </Form>
  );
};

export const FormControlExample = Template.bind({});

FormControlExample.args = {
  grid: 3,
  align: "center"
};
