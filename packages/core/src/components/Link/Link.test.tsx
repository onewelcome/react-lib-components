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
import { Link, Props } from "./Link";
import { render } from "@testing-library/react";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";

const defaultParams: Props = {
  type: "external",
  to: "https://www.google.com"
};

const createLink = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <Link {...parameters} data-testid="link">
      link content
    </Link>
  );
  const link = queries.getByTestId("link");

  return {
    ...queries,
    link
  };
};

describe("Link should render", () => {
  it("renders without crashing", () => {
    const { link } = createLink();

    expect(link).toBeTruthy();
  });

  it("is an external link with the right attributes", () => {
    const { link } = createLink();

    expect(link).toHaveAttribute("aria-disabled", "false");
    expect(link).toHaveAttribute("rel", "noopener noreferer");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("is an internal link with the right attributes", () => {
    const { link } = createLink(defaultParams => ({
      ...defaultParams,
      type: "internal",
      to: "/home"
    }));

    expect(link).toHaveAttribute("aria-disabled", "false");
    expect(link).not.toHaveAttribute("rel", "noopener noreferer");
    expect(link).not.toHaveAttribute("target", "_blank");
  });

  it("is a download link with the right attributes", () => {
    const { link } = createLink(defaultParams => ({
      ...defaultParams,
      type: "download",
      to: "/test.png"
    }));

    expect(link).toHaveAttribute("aria-disabled", "false");
    expect(link).not.toHaveAttribute("rel", "noopener noreferer");
    expect(link).not.toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("download");
  });

  it("should set the correct target", () => {
    const { link } = createLink(defaultParams => ({ ...defaultParams, target: "_parent" }));

    expect(link).toHaveAttribute("target", "_parent");
  });

  it("should accept this React Router Link prop and render as such", () => {
    const queries = render(
      <BrowserRouter>
        <Link to="/contact" component={RouterLink} children="Routerlink" />
      </BrowserRouter>
    );

    const routerLink = queries.getByText("Routerlink");

    expect(routerLink).toBeTruthy();
    expect(routerLink).toHaveClass("link");
    expect(routerLink).toHaveAttribute("href", "/contact");
  });

  it("should be disabled", () => {
    const { link } = createLink(defaultParams => ({ ...defaultParams, disabled: true }));

    expect(link).not.toHaveAttribute("href");
    expect(link).toHaveClass("disabled");
    expect(link).toHaveStyle({ color: "var(--greyed-out)" });
  });

  it("should have a className added", () => {
    const { link } = createLink(defaultParams => ({ ...defaultParams, className: "classname" }));

    expect(link).toHaveClass("classname");
  });

  it("should render as a filled button ", () => {
    const { link } = createLink(defaultParams => ({
      ...defaultParams,
      display: "button",
      buttonVariant: "fill"
    }));

    expect(link).toHaveClass("button");
    expect(link).toHaveClass("fill");
  });

  it("should render as a text button ", () => {
    const { link } = createLink(defaultParams => ({
      ...defaultParams,
      display: "button",
      buttonVariant: "text"
    }));

    expect(link).toHaveClass("button");
    expect(link).toHaveClass("text");
  });

  it("should render as an outline button ", () => {
    const { link } = createLink(defaultParams => ({
      ...defaultParams,
      display: "button",
      buttonVariant: "outline"
    }));

    expect(link).toHaveClass("button");
    expect(link).toHaveClass("outline");
  });
});

describe("ref should work", () => {
  it("should give back the proper data prop, this also checks if the component propagates ...rest properly", () => {
    const ExampleComponent = ({
      propagateRef
    }: {
      propagateRef?: (ref: React.RefObject<HTMLElement>) => void;
    }) => {
      const ref = useRef(null);

      useEffect(() => {
        if (ref.current) {
          propagateRef && propagateRef(ref);
        }
      }, [ref]);

      return <Link {...defaultParams} data-ref="testing" ref={ref} />;
    };

    const refCheck = (ref: React.RefObject<HTMLElement>) => {
      expect(ref.current).toHaveAttribute("data-ref", "testing");
    };

    render(<ExampleComponent propagateRef={refCheck} />);
  });
});

describe("colors", () => {
  it("should be color primary", () => {
    const { link } = createLink(defaultParams => ({ ...defaultParams, color: "primary" }));

    expect(link).toHaveStyle({ color: "var(--color-primary)" });
  });

  it("should be color secondary", () => {
    const { link } = createLink(defaultParams => ({ ...defaultParams, color: "success" }));

    expect(link).toHaveStyle({ color: "var(--color-success)" });
  });

  it("should be color danger", () => {
    const { link } = createLink(defaultParams => ({ ...defaultParams, color: "danger" }));

    expect(link).toHaveStyle({ color: "var(--color-danger)" });
  });

  it("should be color warning", () => {
    const { link } = createLink(defaultParams => ({ ...defaultParams, color: "warning" }));

    expect(link).toHaveStyle({ color: "var(--color-warning)" });
  });
});
