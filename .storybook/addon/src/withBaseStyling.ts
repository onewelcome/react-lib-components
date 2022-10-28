import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { CSSPropertyToObjectKey, ObjectKeyToCSSProperty } from "./utils/helpers";

export const withBaseStyling: DecoratorFunction = (StoryFn, context) => {
  const [{ baseStyling }, updateGlobals] = useGlobals();

  useEffect(() => {
    setTimeout(() => {
      const htmlElement = context.canvasElement?.closest("html");

      if (htmlElement) {
        const stylesObject = parseStylesToObject(htmlElement.getAttribute("style"));

        console.log(stylesObject, "STYLEOBJECT");

        updateGlobals({
          baseStyling: stylesObject
        });
      }
    }, 1);
  }, [window.location.search]);

  useEffect(() => {
    updateCSSPropertiesOnHTMLElement(baseStyling);
  }, [baseStyling]);

  const parseStylesToObject = (styleString: string) => {
    const propertiesArray = styleString.split(";");
    const propertiesObject: Record<string, string> = {};

    if (propertiesArray.length) {
      propertiesArray.forEach(property => {
        if (property) {
          const { key, value } = CSSPropertyToObjectKey(property);

          propertiesObject[key] = value;
        }
      });
    }

    return propertiesObject;
  };

  const updateCSSPropertiesOnHTMLElement = (stylingObject: Record<string, string>) => {
    let styleString = "";
    for (const property in stylingObject) {
      const CSSPropertyString = ObjectKeyToCSSProperty({
        key: property,
        value: stylingObject[property]
      });

      styleString += CSSPropertyString;
    }

    window.sessionStorage.setItem("basestyling", JSON.stringify(stylingObject));

    const updatedStyling = new Event("updated-styling");

    window.dispatchEvent(updatedStyling);
  };
  return StoryFn();
};
