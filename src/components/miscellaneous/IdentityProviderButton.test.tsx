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
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IdentityProviderButton } from "./IdentityProviderButton";
import { Props } from "./IdentityProviderButton";

const UI_RESOURCES_COMMON_ICONS_PREFIX_URL = "/ui-resources-static/common/idb/icons";

const defaultParams: Props = { idpType: "SAML" };

const createBaseButton = (params?: (defaultParams: Props) => Props) => {
  let parameters: Props = defaultParams;
  if (params) {
    parameters = params(defaultParams);
  }
  const queries = render(
    <IdentityProviderButton {...parameters} data-testid="identityProviderButton">
      IdentityProviderButton content
    </IdentityProviderButton>
  );
  const identityProviderButton = queries.getByTestId("identityProviderButton");

  return {
    ...queries,
    identityProviderButton
  };
};

describe("BaseButton", () => {
  it("should render without crashing", () => {
    const { identityProviderButton } = createBaseButton();

    expect(identityProviderButton).toBeDefined();
    expect(identityProviderButton).toHaveTextContent("IdentityProviderButton content");
  });

  describe("On click handler", () => {
    it("executes the onclick handler", async () => {
      const onClickHandler = jest.fn();
      const { identityProviderButton } = createBaseButton(defaultParams => ({
        ...defaultParams,
        onClick: onClickHandler
      }));

      await userEvent.click(identityProviderButton);

      expect(onClickHandler).toBeCalled();
    });
  });

  describe("Properties of the button", () => {
    it("when loading onClick function should not have been called", async () => {
      const onClickHandler = jest.fn();
      const { identityProviderButton } = createBaseButton(defaultParams => ({
        ...defaultParams,
        loading: true,
        onClick: onClickHandler
      }));

      await userEvent.click(identityProviderButton);
      expect(onClickHandler).toHaveBeenCalledTimes(0);
    });

    it('should have the class "TESTING"', () => {
      const { identityProviderButton } = createBaseButton(defaultParams => ({
        ...defaultParams,
        className: "TESTING"
      }));

      expect(identityProviderButton).toHaveClass("TESTING");
    });

    it('should fallback to default URL when iconUrl is not passed based on idpType"', () => {
      const { identityProviderButton } = createBaseButton(defaultParams => ({
        ...defaultParams,
        idpType: "OIDC"
      }));

      expect(identityProviderButton.querySelector("img")).toHaveAttribute(
        "src",
        `${UI_RESOURCES_COMMON_ICONS_PREFIX_URL}/OIDC.svg`
      );
    });

    it('should fallback to default URL when iconUrl is not passed based on idpType"', () => {
      const { identityProviderButton } = createBaseButton(defaultParams => ({
        ...defaultParams,
        idpType: "OIDC"
      }));

      expect(identityProviderButton.querySelector("img")).toHaveAttribute(
        "src",
        `${UI_RESOURCES_COMMON_ICONS_PREFIX_URL}/OIDC.svg`
      );
    });

    it('should not fallback to default URL when iconUrl is passed"', () => {
      const iconUrl = "/resources/michal/tu/byl.jpg";

      const { identityProviderButton } = createBaseButton(defaultParams => ({
        ...defaultParams,
        idpType: "OIDC",
        iconUrl: iconUrl
      }));

      expect(identityProviderButton.querySelector("img")).toHaveAttribute("src", iconUrl);
    });

    it('should set the alt text on IDP icon"', () => {
      const iconUrl = "/resources/michal/tu/byl.jpg";

      const { getByRole, getByAltText } = createBaseButton(defaultParams => ({
        ...defaultParams,
        idpType: "OIDC",
        iconUrl: iconUrl,
        imgAltText: "OIDC"
      }));

      expect(getByAltText("OIDC")).toBeInTheDocument();
      expect(getByRole("img")).toBeInTheDocument();
    });

    it('should aria hide icon if no alt text is provided"', async () => {
      const iconUrl = "/resources/michal/tu/byl.jpg";

      const { queryByRole, getByAltText } = createBaseButton(defaultParams => ({
        ...defaultParams,
        idpType: "OIDC",
        iconUrl: iconUrl
      }));

      expect(getByAltText("Identity Provider icon")).toBeInTheDocument();
      const img = await queryByRole("img");
      expect(img).toBeNull();
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

        return <IdentityProviderButton {...defaultParams} data-ref="testing" ref={ref} />;
      };

      const refCheck = (ref: React.RefObject<HTMLElement>) => {
        expect(ref.current).toHaveAttribute("data-ref", "testing");
      };

      render(<ExampleComponent propagateRef={refCheck} />);
    });
  });
});
