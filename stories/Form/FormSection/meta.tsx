import { Meta } from "@storybook/react";
import React from "react";
import { FormSection } from "../../../src/components/Form/FormSection/FormSection";
import FormSectionDocumentation from "./FormSection.mdx";

const meta: Meta = {
    title: "Components/layout/FormSection",
    component: FormSection,
    parameters: {
        docs: {
            page: FormSectionDocumentation
        }
    },
    args: {
        header: "Form Section Header Text",
        children: (
            <label for="fname">First name:</label>, <br>
                <input type="text" id="fname" name="fname"><br>
                    <label for="lname">Last name:</label><br>
                        <input type="text" id="lname" name="lname">
                            ),
                            subtext: "Form Section Subheader"
  }
};

                            export default meta;

                            const Template: Story<Props> = args => <FormSection {...args} />;
                                export const FormSectionComponent = Template.bind();</></></></></></>)
    }
};
