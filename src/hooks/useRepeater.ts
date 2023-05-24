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

import React, { useEffect, useState, JSX } from "react";
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
