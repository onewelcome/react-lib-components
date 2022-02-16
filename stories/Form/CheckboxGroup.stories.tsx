import { Meta, Story } from "@storybook/react";
import { Checkbox } from "../../src/Form/Checkbox/Checkbox";
import { CheckboxGroup, Props as CheckboxGroupProps } from "../../src/Form/CheckboxGroup/CheckboxGroup";

const meta: Meta = {
  title: "CheckboxGroup",
  component: CheckboxGroup,
};

export default meta;

const NestedTemplate: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args} errorMessage="Please check all the boxes" legend="Electronics" helperText="Helpertext for the group">
    <Checkbox helperText="This is example helpertext" name="electronics" label="Electronics">
      <Checkbox checked={true} helperText="More examples" name="laptop">
        Laptop
      </Checkbox>
      <Checkbox name="tv">TVs</Checkbox>
      <Checkbox name="microphones">Microphones</Checkbox>
    </Checkbox>
  </CheckboxGroup>
);

export const NestedCheckboxes = NestedTemplate.bind({});

NestedCheckboxes.args = {};
