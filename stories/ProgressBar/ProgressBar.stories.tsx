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

import React, { Fragment, useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import {
  ProgressBar as ProgressBarComponent,
  Props
} from "../../src/components/ProgressBar/ProgressBar";
import ProgressBarDocumentation from "./ProgressBar.mdx";

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
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Delay for the first render for Chromatic to capture the initial state.
    const initialDelay = setTimeout(() => {
      if (percentage < 100) {
        const timer = setInterval(() => {
          setPercentage(prevPercentage => prevPercentage + 1);
        }, Math.floor(Math.random() * (2000 - 100 + 1) + 100));

        return () => clearInterval(timer);
      }
    }, 2000); // 2 seconds delay

    return () => clearTimeout(initialDelay);
  }, [percentage]);

  return (
    <Fragment>
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ProgressBarComponent caption="One moment please..." percentage={percentage} {...args} />
      </div>
      {percentage === 100 && <div style={{ marginTop: "3rem" }}>Finished loading!</div>}
    </Fragment>
  );
};

export const ProgressBar = Template.bind({});

ProgressBar.args = {
  placeholderText: "Loading...",
  label: "Loading..."
};
