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

import React from "react";
import { Meta, Story } from "@storybook/react";
import { BaseWizardSteps, Props } from "../../src/Wizard/BaseWizardSteps/BaseWizardSteps";
import WizardDocumentation from "./Wizard.mdx";

const onClick = (stepNo: number) => {
  alert("Clicked stepNo:" + stepNo);
};

const meta: Meta = {
  title: "components/Layout/Wizard/WizardSteps",
  component: BaseWizardSteps,
  parameters: {
    docs: {
      page: WizardDocumentation
    }
  },
  args: {
    steps: [
      {
        label: "Step 1"
      },
      {
        label: "Step 2"
      },
      {
        label: "Step 3",
        disabled: true
      },
      {
        label: "Step 4"
      },
      {
        label: "Very long label for step 5",
        disabled: true
      },
      {
        label: "Last step"
      }
    ],
    currentStepNo: 3,
    onClick
  }
};

export default meta;

const Template: Story<Props> = args => <BaseWizardSteps {...args} />;

export const WizardSteps = Template.bind({});
WizardSteps.storyName = "WizardSteps";
