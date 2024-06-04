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

import { Meta, StoryFn } from "@storybook/react";
import {
  MicrofrontendContainer as MicrofrontendContainerComponent,
  Props
} from "../../../src/components/admin/layout/MicrofrontendContainer/MicrofrontendContainer";
import React, { Fragment, ReactElement } from "react";
import {
  Button,
  ButtonProps,
  ContentHeader,
  DataGrid,
  DataGridCell,
  DataGridRow,
  FormSection,
  FormStepper,
  FormStepProps,
  FormWithStepper,
  Icon,
  Icons
} from "../../../src";
import { FormControlExample } from "../../Form/Examples/FormControlExample";

const meta: Meta = {
  title: "admin/Layout",
  component: MicrofrontendContainerComponent
};

const initialStepperState: FormStepProps[] = [
  {
    status: "done",
    label: "Step 1",
    targetScrollViewId: "samlBaseInfo"
  },
  {
    status: "error",
    label: "Step 2",
    targetScrollViewId: "samlConnectionDetail"
  }
];

const formButtonList: ReactElement<ButtonProps, typeof Button>[] = [
  <Button key="1" onClick={() => alert("Cancel button clicked.")} variant="text">
    Cancel
  </Button>,
  <Button key="2" disabled startIcon={<Icon icon={Icons.SaveOutline} />}>
    Save Draft
  </Button>,
  <Button
    key="3"
    onClick={() => alert("Submit button clicked.")}
    startIcon={<Icon icon={Icons.ReplyOutline} />}
  >
    Submit
  </Button>
];

const stepper = <FormStepper steps={initialStepperState} direction={"vertical"} />;

const Template: StoryFn<Props> = args => {
  const boxShadow = {
    boxShadow: "0px 1px 5px 0px #01053214"
  };
  const centerText = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <Fragment>
      <div style={{ height: "4rem", ...boxShadow, ...centerText }}>HEADER</div>
      <div style={{ display: "flex" }}>
        <div style={{ ...boxShadow, ...centerText, width: "8vw", zIndex: 1, minHeight: "40vw" }}>
          NAV
        </div>
        <div style={{ flexGrow: 1 }}>
          <MicrofrontendContainerComponent
            header={<ContentHeader buttons={formButtonList} title={"Example title"} />}
            {...args}
          >
            {args.children}
          </MicrofrontendContainerComponent>
        </div>
      </div>
    </Fragment>
  );
};

export const MicrofrontendContainerFormWithStepper = Template.bind({});

MicrofrontendContainerFormWithStepper.args = {
  children: (
    <FormWithStepper stepper={stepper}>
      <div>
        <FormSection
          id="samlBaseInfo"
          header="Step 1 Form Section"
          subtext="Form Section sub-header."
        >
          <FormControlExample></FormControlExample>
        </FormSection>
        <FormSection
          id="samlConnectionDetail"
          header="Step 2 Form Section"
          subtext="Form Section Subheader"
        >
          <FormControlExample></FormControlExample>
        </FormSection>
      </div>
    </FormWithStepper>
  )
};

export const MicrofrontendContainerTable = Template.bind({});

MicrofrontendContainerTable.args = {
  children: (
    <DataGrid
      headers={[
        { name: "name", headline: "Name" },
        { name: "created", headline: "Created" },
        { name: "id", headline: "Identifier" }
      ]}
      data={[
        {
          name: "Company 1",
          created: new Date(2023, 0, 1),
          id: "1",
          type: "Stock",
          enabled: true
        },
        {
          name: "Company 2",
          created: new Date(2023, 0, 2),
          id: "2",
          type: "Stock",
          enabled: false
        }
      ]}
    >
      {({ item }: { item: { name: string; id: string; created: Date } }) => (
        <DataGridRow key={item.id}>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>{item.created.toLocaleDateString()}</DataGridCell>
          <DataGridCell>{item.id}</DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  )
};
export default meta;
