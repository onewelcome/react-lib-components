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
import { FormControl as FormControlComponent } from "../../../src/components/Form/FormControl/FormControl";
import {
  Checkbox,
  CheckboxWrapper,
  Fieldset,
  Form,
  InputWrapper,
  Radio,
  RadioWrapper
} from "../../../src";

interface Props {
  index?: number;
  updateStepStatus?: any;
}

export const FormControlExample = ({ index, updateStepStatus }: Props) => {
  const [preferredMobileDevice, setPreferredMobileDevice] = useState("mobile");
  const [dirtyData, setDirtyData] = useState(false);
  const [electronics, setElectronics] = useState({
    indeterminate: false,
    checked: false,
    tv: false,
    mobile: false,
    laptop: false
  });
  const defaultInputValue = "";
  const [inputValue, setInputValue] = useState(defaultInputValue);

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

  const setInputControlValue = (event: any) => {
    setInputValue(event.target.value);
    setDirtyData(true);

    updateStepStatus && updateStepStatus(index, event.target.value ? "done" : "error");
  };

  return (
    <Form style={{ padding: "20px" }}>
      <FormControlComponent grid={3} align={"center"}>
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
            required
            errorMessage={"This is an error"}
            type="text"
            value={inputValue}
            onChange={e => setInputControlValue(e)}
            error={!inputValue && dirtyData}
            label="Label for this inputfield"
          />
        </Fieldset>
      </FormControlComponent>
    </Form>
  );
};
