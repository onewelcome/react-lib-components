import React from "react";
import { StoryFn } from "@storybook/react";
import { AlertItem } from "../../../../src/components/Notifications/Alert/AlertItem/AlertItem";

const AlertVariantsTemplate: StoryFn<{}> = () => {
  const renderNeutrals = () => (
    <div style={{ marginRight: "1em" }}>
      <AlertItem
        title="Neutral"
        content="Low emphasis"
        variant="neutral"
        emphasis="low"
        id="neut-low"
      />
      <AlertItem title="Neutral" content="Medium emphasis (default)" id="neut-med" />
      <AlertItem
        title="Neutral"
        content="High emphasis"
        variant="neutral"
        emphasis="high"
        id="neutral-high"
      />
    </div>
  );

  const renderInfirmatives = () => (
    <div style={{ marginRight: "1em" }}>
      <AlertItem
        title="Informative"
        content="Low emphasis"
        variant="informative"
        emphasis="low"
        id="informative-low"
      />
      <AlertItem
        title="Informative"
        content="Medium emphasis"
        variant="informative"
        id="informative-medium"
      />
      <AlertItem
        title="Informative"
        content="High emphasis"
        variant="informative"
        emphasis="high"
        id="informative-high"
      />
    </div>
  );

  const renderSuccesses = () => (
    <div style={{ marginRight: "1em" }}>
      <AlertItem
        title="Success"
        content="Low emphasis"
        variant="success"
        emphasis="low"
        id="success-low"
      />
      <AlertItem title="Success" content="Medium emphasis" variant="success" id="success-medium" />
      <AlertItem
        title="Success"
        content="High emphasis"
        variant="success"
        emphasis="high"
        id="success-high"
      />
    </div>
  );

  const renderWarnings = () => (
    <div style={{ marginRight: "1em" }}>
      <AlertItem
        title="Warning"
        content="Low emphasis"
        variant="warning"
        emphasis="low"
        id="warning-low"
      />
      <AlertItem title="Warning" content="Medium emphasis" variant="warning" id="warning-medium" />
      <AlertItem
        title="Warning"
        content="High emphasis"
        variant="warning"
        emphasis="high"
        id="warning-high"
      />
    </div>
  );

  const renderErrors = () => (
    <div style={{ marginRight: "1em" }}>
      <AlertItem
        title="Error"
        content="Low emphasis"
        variant="error"
        emphasis="low"
        id="error-low"
      />
      <AlertItem title="Error" content="Medium emphasis" variant="error" id="error-medium" />
      <AlertItem
        title="Error"
        content="High emphasis"
        variant="error"
        emphasis="high"
        id="error-high"
      />
    </div>
  );

  return (
    <>
      <div style={{ display: "flex" }}>
        {renderNeutrals()}
        {renderInfirmatives()}
      </div>

      <div style={{ display: "flex", marginTop: "1.5em" }}>
        {renderSuccesses()}
        {renderWarnings()}
      </div>
      <div style={{ display: "flex", marginTop: "1.5em" }}>{renderErrors()}</div>
    </>
  );
};

export default AlertVariantsTemplate;
