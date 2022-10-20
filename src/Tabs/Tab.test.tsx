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

import React, { useEffect, useRef } from "react";
import { Tabs } from "./Tabs";
import { Tab, Props } from "./Tab";
import { render } from "@testing-library/react";

const defaultParams: Props = {
  title: "Title of tab"
};

const createTab = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Tab {...parameters} data-testid="tab">
      tab content
    </Tab>
  );
  const tab = queries.getByTestId("tab");

  return {
    ...queries,
    tab
  };
};

describe("Tab should render", () => {
  it("renders without crashing", () => {
    const { tab } = createTab();

    expect(tab).toBeTruthy();
  });
});

describe("Tab useRef should work for panel and button", () => {
  it("gives us back the proper refs", () => {
    type logRefsFunction = (
      buttonRef: React.RefObject<HTMLButtonElement>,
      panelRef: React.RefObject<HTMLDivElement>
    ) => void;
    const ExampleComponent = ({ logRefs }: { logRefs: logRefsFunction }) => {
      const ref1 = useRef<HTMLButtonElement>(null);
      const ref2 = useRef<HTMLDivElement>(null);

      useEffect(() => {
        if (ref1.current && ref2.current) {
          logRefs(ref1, ref2);
        }
      }, [ref1, ref2]);

      return (
        <Tabs>
          <Tab buttonRef={ref1} panelRef={ref2} title="ShouldBeButtonRef">
            <span>Should be panel ref</span>
          </Tab>
        </Tabs>
      );
    };

    const setCorrectText = (
      buttonRef: React.RefObject<HTMLButtonElement>,
      panelRef: React.RefObject<HTMLDivElement>
    ) => {
      expect(buttonRef.current?.innerHTML).toContain("ShouldBeButtonRef");
      expect(panelRef.current?.innerHTML).toEqual("<span>Should be panel ref</span>");
    };

    render(<ExampleComponent logRefs={setCorrectText} />);
  });
});
