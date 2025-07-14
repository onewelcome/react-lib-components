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
import { Meta, StoryFn } from "@storybook/react";
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

const Template: StoryFn<Props> = args => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Delay for the first render for Chromatic to capture the initial state.
    if (percentage === 0) {
      const initialDelay = setTimeout(() => {
        const timer = setInterval(
          () => {
            setPercentage(prevPercentage => {
              if (prevPercentage < 100) {
                return prevPercentage + 1;
              } else {
                clearInterval(timer); // Stop the timer when we reach 100
                return prevPercentage;
              }
            });
          },
          Math.floor(Math.random() * (2000 - 100 + 1) + 100)
        );

        return () => clearInterval(timer);
      }, 2000);

      return () => clearTimeout(initialDelay);
    }
  }, [percentage]);

  return (
    <Fragment>
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <ProgressBarComponent
          caption="One moment please..."
          completed={percentage}
          percentage={percentage}
          {...args}
        />
      </div>
      {percentage === 100 && <div style={{ marginTop: "3rem" }}>Finished loading!</div>}
    </Fragment>
  );
};

export const ProgressBar = Template.bind({});

ProgressBar.args = {
  label: "Loading..."
};

export const ProgressBarWithoutPercentage = Template.bind({});

ProgressBarWithoutPercentage.args = {
  label: "Loading...",
  percentage: undefined,
  completed: undefined
};
