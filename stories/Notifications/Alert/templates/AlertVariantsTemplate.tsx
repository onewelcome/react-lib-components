import React from "react";
import { StoryFn } from "@storybook/react";
import { AlertItem } from "../../../../src/components/Notifications/Alert/AlertItem/AlertItem";

const AlertVariantsTemplate: StoryFn<{}> = () => {
  const variants: React.ComponentProps<typeof AlertItem>["variant"][] = [
    "neutral",
    "informative",
    "success",
    "warning",
    "error"
  ];

  const emphases: React.ComponentProps<typeof AlertItem>["emphasis"][] = ["low", "medium", "high"];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {variants.map(vari => {
        const renderedEmph = emphases.map(emph => {
          return (
            <div style={{ margin: "8px" }}>
              <AlertItem
                title={`Variant: ${vari}`}
                content={`Emphasis: ${emph}`}
                variant={vari}
                emphasis={emph}
                id="error-high"
              />
            </div>
          );
        });
        return <div style={{ margin: "8px 0" }}>{renderedEmph}</div>;
      })}
    </div>
  );
};

export default AlertVariantsTemplate;
