import React, { HTMLProps, ReactChild } from "react";
import { Icon, Icons } from "../../src/Icon/Icon";

export interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactChild;
}

export const IconGrid = ({ children }: Props) => {
  const copyIconHandler = icon => {
    const toCopy = `<Icon icon={Icons.${icon}} />`;

    navigator.clipboard.writeText(toCopy);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}
    >
      {Object.keys(Icons).map((icon, index) => (
        <article
          key={index}
          style={{
            flexBasis: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <Icon icon={Icons[icon]} />
          <button
            onClick={copyIconHandler.bind(null, icon)}
            title="Click here to copy React Component"
            style={{ padding: "5px", cursor: "copy", marginTop: "5px" }}
          >
            <pre style={{ margin: "0" }}>
              <code>{Icons[icon]}</code>
            </pre>
          </button>
        </article>
      ))}
    </div>
  );
};
