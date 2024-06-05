import { Meta, StoryFn } from "@storybook/react";
import {
  ContentHeader as ContentHeaderComponent,
  Props
} from "../../src/components/Layout/ContentHeader/ContentHeader";
import ContentHeaderDocumentation from "./ContentHeader.mdx";
import React, { Fragment, ReactElement } from "react";
import { Button, ButtonProps, Icon, Icons } from "../../src";

const contentButtonList: ReactElement<ButtonProps, typeof Button>[] = [
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

const meta: Meta = {
  title: "Components/Layout/ContentHeader",
  component: ContentHeaderComponent,
  parameters: {
    docs: {
      page: ContentHeaderDocumentation
    }
  },
  args: {
    title: "Content Header Text",
    children: "Content Description",
    buttons: contentButtonList,
    collapsed: false
  },
  argTypes: {
    children: {
      control: false
    }
  }
};

export default meta;

const Template: StoryFn<Props> = args => <ContentHeaderComponent {...args} />;

export const ContentHeader = Template.bind({});

export const ContentHeaderWithSubtitle = Template.bind({});

ContentHeaderWithSubtitle.args = {
  children: (
    <Fragment>
      Content <i>Description</i>
    </Fragment>
  ),
  subtitle: "Explore Stories, One Page at a Time",
  buttons: contentButtonList.slice(0, 2)
};

export const ContentHeaderWithCollapseHeader = Template.bind({});

ContentHeaderWithCollapseHeader.args = {
  children: (
    <Fragment>
      Content <i>Description</i>
    </Fragment>
  ),
  buttons: contentButtonList,
  collapsed: true,
  subtitle: "Hey there! I'm just a subtitle"
};
