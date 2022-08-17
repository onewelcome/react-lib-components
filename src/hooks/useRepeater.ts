import React, { useEffect, useState } from "react";
import { generateID } from "../util/helper";

interface Arguments {
  componentToRepeat: React.ReactElement;
}

export const useRepeater = <T>({ componentToRepeat }: Arguments) => {
  const [repeatedComponents, setRepeatedComponents] = useState<JSX.Element[]>([]);

  useEffect(() => {
    repeat();
  }, []);

  const repeat = () => {
    const clonedComponent = React.cloneElement(componentToRepeat, { key: generateID(20) });

    setRepeatedComponents(prevState => [...prevState, clonedComponent]);
  };

  const remove = (componentToRemove: React.ReactElement<T>) => {
    const newRepeatedComponents = repeatedComponents.filter(
      component => component !== componentToRemove
    );

    setRepeatedComponents(newRepeatedComponents);
  };

  return {
    repeatedComponents,
    repeat,
    remove
  };
};
