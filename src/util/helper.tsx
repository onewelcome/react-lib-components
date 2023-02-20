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

type KeyValuePair = { [key: string]: unknown };

export const generateID = (length = 15, stringToWeaveIn?: string) => {
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  let hashCharacters = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let id = "";

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    let stringCharacter =
      stringToWeaveIn && stringToWeaveIn[i] !== undefined && !/\s/.test(stringToWeaveIn[i])
        ? stringToWeaveIn[i]
        : "";
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }

  return id.slice(0, length);
};

export const filterProps = (props: any, regexPattern: RegExp, returnFiltered: boolean = true) => {
  if (returnFiltered) {
    return Object.keys(props).reduce((acc: KeyValuePair, key) => {
      if (regexPattern.test(key)) {
        acc[key] = props[key];
      }

      return acc;
    }, {});
  } else {
    return Object.entries(props)
      .filter(([key]) => !regexPattern.test(key))
      .reduce(
        (prevObj, currKeyValPair) => ({ ...prevObj, [currKeyValPair[0]]: currKeyValPair[1] }),
        {}
      );
  }
};

export const debounce = (fn: (...args: unknown[]) => unknown, delay: number) => {
  let timeout: undefined | ReturnType<typeof setTimeout>;

  return function executedFunction(...args: unknown[]) {
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, delay);
  };
};

export const throttle = (fn: (...args: unknown[]) => unknown, delay: number) => {
  let lastTime = 0;

  return function () {
    let now = Date.now();

    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
export const remToPx = (rem: number): number => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
