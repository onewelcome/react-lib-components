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

import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { ProgressBar as ProgressBarComponent, Props } from "../../src/ProgressBar/ProgressBar";
import ProgressBarDocumentation from "./ProgressBar.mdx";
import { Button } from "../../src/Button/Button";

const meta: Meta = {
  title: "components/Feedback/ProgressBar",
  component: ProgressBarComponent,
  parameters: {
    docs: {
      page: ProgressBarDocumentation
    }
  }
};

export default meta;

const Template: Story<Props> = args => {
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsProgressBarVisible(!isProgressBarVisible)}>
        {isProgressBarVisible ? "Hide progress bar" : "Show progress bar"}
      </Button>
      {isProgressBarVisible && (
        <div style={{ width: "500px", marginTop: "32px" }}>
          <ProgressBarComponent {...args} />
        </div>
      )}
    </div>
  );
};

export const ProgressBar = Template.bind({});

ProgressBar.args = {
  placeholderText: "Loading..."
};
