import React, { Fragment, useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Select, Props } from "../../src/Form/Select/Select";
import { Option } from "../../src/Form/Select/Option";

const meta: Meta = {
  title: "Select",
  component: Select,
};

export default meta;

const Template: Story<Props> = (args) => {
  return (
    <Fragment>
      <Select {...args}>
        <Option value="option1">Test</Option>
        <Option value="option2">Test2</Option>
        <Option value="option3">Test3</Option>
        <Option value="option4">Test4</Option>
        <Option value="option5">Test5</Option>
        <Option value="option6">Test6</Option>
        <Option value="option7">Test7</Option>
        <Option value="option8">Test8</Option>
        <Option value="option9">Test9</Option>
        <Option value="option10">Test10</Option>
        <Option value="option11">Test11</Option>
      </Select>
    </Fragment>
  );
};

export const SelectEl = Template.bind({});

SelectEl.args = {};
