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

import React from "react";
import { render } from "@testing-library/react";
import { GenericMicrofrontendContainer, Props } from "./GenericMicrofrontendContainer";

const createMicrofrontendContainer = (props?: Props) => {
  const queries = render(
    <GenericMicrofrontendContainer
      {...props}
      data-testid="microfrontend-container"
    ></GenericMicrofrontendContainer>
  );
  const microfrontendContainer = queries.getByTestId("microfrontend-container");

  return {
    ...queries,
    microfrontendContainer
  };
};

describe("MicrofrontendContainer component", () => {
  test("should render without crashing", () => {
    const { microfrontendContainer } = createMicrofrontendContainer();

    expect(microfrontendContainer).toBeDefined();
    expect(microfrontendContainer.className).not.toContain("full-width");
  });

  test("should render with full-width class", () => {
    const { microfrontendContainer } = createMicrofrontendContainer({ fullWidth: true });

    expect(microfrontendContainer).toBeDefined();
    expect(microfrontendContainer.className).toContain("full-width");
  });
});
