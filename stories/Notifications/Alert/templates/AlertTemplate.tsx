import React from "react";
import { StoryFn } from "@storybook/react";
import { AlertProvider } from "../../../../src/components/Notifications/Alert/AlertProvider/AlertProvider";
import { useAlert } from "../../../../src/components/Notifications/Alert/useAlert";
import { Button } from "../../../../src/components/Button/Button";
import { AlertQueue } from "../../../../src/components/Notifications/Alert/AlertProvider/AlertContext";

type AlertQueueExtended = AlertQueue & {
  ["AlertProvider.closeButtonTitle"]: string;
};

const controlArguments: AlertQueueExtended = {
  ["AlertProvider.closeButtonTitle"]: "Close",
  title: "Title",
  content: "Content",
  closeButtonTitle: "",
  duration: 4000,
  variant: "neutral",
  emphasis: "medium",

  onClose: () => console.warn("Alert closed")
};

const Content = (args: AlertQueue) => {
  const { enqueueAlert } = useAlert();

  const handleTriggerAlert = () => {
    if (((args): args is string => typeof args === "string")(args)) {
      return;
    }
    const queueArgs = { ...args };
    delete queueArgs["AlertProvider.closeButtonTitle"];
    enqueueAlert({ ...queueArgs });
  };
  return <Button onClick={handleTriggerAlert}>Trigger alert</Button>;
};

const Template: StoryFn<any> = (args: AlertQueue) => {
  return (
    <AlertProvider closeButtonTitle={args["AlertProvider.closeButtonTitle"]}>
      {!((args): args is string => typeof args === "string")(args) && <Content {...args} />}
    </AlertProvider>
  );
};

const AlertTemplate = {
  oopReinventedBecauseReasons: () => {
    const result = Template.bind({});
    result.args = controlArguments;
    result.argTypes = {
      variant: {
        options: ["neutral", "informative", "success", "warning", "error"],
        control: {
          type: "radio"
        }
      },
      emphasis: {
        options: ["medium", "low", "high"],
        control: {
          type: "radio"
        }
      }
    };

    result.parameters = {
      controls: {
        exclude: []
      }
    };
    return result;
  }
};

export default AlertTemplate;
