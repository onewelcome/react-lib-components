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

import { Meta } from "@storybook/react";
import AlertDocumentation from "./Alert.mdx";

const meta: Meta = {
  title: "components/Feedback/Alert",
  parameters: {
    docs: {
      page: AlertDocumentation
    }
  }
};

export default meta;

import AlertTemplate from "./templates/AlertTemplate";
export const AlertPlayground = AlertTemplate.oopReinventedBecauseReasons();

import AlertVariantsTemplate from "./templates/AlertVariantsTemplate";
export const AllAlertVariants = AlertVariantsTemplate;

// const AlertWithTitleAppContent = () => {
//   const { enqueueAlert } = useAlert();

//   useEffect(() => {
//     enqueueAlert({
//       title: "This is a title",
//       content: "Phasellus eleifend cursus vehicula. Pellentesque ut sem in elit pulvinar luctus.",
//       actions: [{ label: "Action", onClick: () => alert("Clicked support") }],
//       onClose: () => console.warn("onClose handler"),
//       duration: 200000
//     });
//   }, []);

//   return null;
// };

// const AlertWithTitleTemplate: StoryFn<Props> = () => {
//   return (
//     <AlertProvider closeButtonTitle="Close">
//       <AlertWithTitleAppContent />
//     </AlertProvider>
//   );
// };

// export const AlertWithTitle = AlertWithTitleTemplate.bind({});

// const SuccessAlertAppContent = () => {
//   const { enqueueSuccessAlert } = useAlert();

//   useEffect(() => {
//     enqueueSuccessAlert({
//       content: "Alert message.",
//       actions: [{ label: "Action", onClick: () => alert("Clicked support") }],
//       onClose: () => console.warn("onClose handler"),
//       duration: 200000
//     });
//   }, []);

//   return null;
// };

// const SuccessAlertTemplate: StoryFn<Props> = () => {
//   return (
//     <AlertProvider closeButtonTitle="Close">
//       <SuccessAlertAppContent />
//     </AlertProvider>
//   );
// };

// export const SuccessAlert = SuccessAlertTemplate.bind({});

// const WarningAlertAppContent = () => {
//   const { enqueueWarningAlert } = useAlert();

//   useEffect(() => {
//     enqueueWarningAlert({
//       content: "Alert message.",
//       actions: [{ label: "Action", onClick: () => alert("Clicked support") }],
//       onClose: () => console.warn("onClose handler"),
//       duration: 200000
//     });
//   }, []);

//   return null;
// };

// const WarningAlertTemplate: StoryFn<Props> = () => {
//   return (
//     <AlertProvider closeButtonTitle="Close">
//       <WarningAlertAppContent />
//     </AlertProvider>
//   );
// };

// export const WarningAlert = WarningAlertTemplate.bind({});
