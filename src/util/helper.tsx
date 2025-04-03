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

/* eslint-disable @typescript-eslint/no-explicit-any */

type KeyValuePair = { [key: string]: unknown };

export const generateID = (length = 15, stringToWeaveIn?: string) => {
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  const hashCharacters = [
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
    const stringCharacter =
      typeof stringToWeaveIn === "string" &&
      stringToWeaveIn?.[i] !== undefined &&
      !/\s/.test(stringToWeaveIn[i])
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
    const now = Date.now();

    if (now - lastTime >= delay) {
      fn();
      lastTime = now;
    }
  };
};

const isEqual = (x: any, y: any): boolean => {
  const typesCoincide = x && y && typeof x === "object" && typeof y === "object";
  return typesCoincide
    ? Object.keys(x).length === Object.keys(y).length &&
        Object.keys(x).every(key => isEqual(x[key], y[key]))
    : x === y;
};

export const areArraysDifferent = (
  arr1: Record<string, any>[],
  arr2: Record<string, any>[],
  key: string
) => {
  if (arr1.length !== arr2.length) {
    return true;
  } else {
    const firstFilteredArray = arr1.filter(arr1Item =>
      arr2.some((arr2Item: { [x: string]: any }) => !isEqual(arr1Item[key], arr2Item[key]))
    );
    const secondFilteredArray = arr2.filter(arr2Item =>
      arr1.some((arr1Item: { [x: string]: any }) => !isEqual(arr1Item[key], arr2Item[key]))
    );

    return !!firstFilteredArray.length || !!secondFilteredArray.length;
  }
};

/** Source: https://stackoverflow.com/a/42769683/5084110 */
export const remToPx = (rem: number): number => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export const isJsonString = (str: any) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

type ObjectType = { [key: string]: any };

export const deepMerge = <T extends object>(obj1: ObjectType, obj2: ObjectType | false): T => {
  if (!obj2) {
    return obj1 as T;
  }

  const result: ObjectType = { ...obj1 };

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        Object.prototype.hasOwnProperty.call(obj1, key) &&
        !Array.isArray(obj2[key])
      ) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result as T;
};

export const castToBoolean = (value: string | boolean): boolean => {
  return typeof value === "boolean" ? value : value?.toLowerCase() === "true";
};

export const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
