import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withBaseStyling: DecoratorFunction = (StoryFn, context) => {
  const [{ baseStyling }, updateGlobals] = useGlobals();

  const htmlElement = context.canvasElement.closest("html");

  useEffect(() => {
    setTimeout(() => {
      const stylesObject = parseStylesToObject(htmlElement.getAttribute("style"));

      updateGlobals({
        baseStyling: stylesObject
      });
    }, 1);
  }, []);

  useEffect(() => {
    updateCSSPropertiesOnHTMLElement(baseStyling);
  }, [baseStyling]);

  const parseStylesToObject = (styleString: string) => {
    const propertiesArray = styleString.split(";");
    const propertiesObject: Record<string, string> = {};

    if (propertiesArray.length) {
      propertiesArray.forEach(property => {
        const matches = property.match(/--(.+):(.+)/);

        if (matches && matches[1] && matches[2]) {
          const objectKey = matches[1].replace(/-(.+?)/g, (_v: string, a: string) => {
            if (a) {
              return a.toUpperCase();
            }
          });

          propertiesObject[objectKey] = matches[2];
        }
      });
    }

    return propertiesObject;
  };

  const updateCSSPropertiesOnHTMLElement = (stylingObject: Record<string, string>) => {
    let styleString = "";
    for (const property in stylingObject) {
      const formattedPropertyName = property.replace(/([A-Z])/g, val => `-${val.toLowerCase()}`);

      styleString += `--${formattedPropertyName}: ${stylingObject[property]};`;
    }

    window.sessionStorage.setItem("basestyling", JSON.stringify(stylingObject));

    const updatedStyling = new Event("updated-styling");

    window.dispatchEvent(updatedStyling);
  };

  return StoryFn();
};
