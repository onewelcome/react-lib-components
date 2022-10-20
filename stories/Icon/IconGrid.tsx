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
