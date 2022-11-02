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

export const cssPropertyToObjectKey = (CSSProperty: string) => {
  const matchesKeyValue = CSSProperty.match(/--(.+)(?=:):?(.+)?/);
  const matchesKeyOnly = CSSProperty.match(/var\(--(.+)\)/);
  const objectKeyValue: { key: null | string; value: null | string } = {
    key: null,
    value: null
  };

  const generateObjectKey = (CSSPropertyString: string) => {
    return CSSPropertyString.replace(/-(.+?)/g, (_v: string, a: string) => {
      if (a) {
        return a.toUpperCase();
      }
    });
  };

  if (!matchesKeyValue && matchesKeyOnly && matchesKeyOnly[1]) {
    const objectKey = generateObjectKey(matchesKeyOnly[1]);
    objectKeyValue.key = objectKey;
  }

  if (matchesKeyValue && matchesKeyValue[1]) {
    const objectKey = generateObjectKey(matchesKeyValue[1]);

    objectKeyValue.key = objectKey;
  }

  if (matchesKeyValue && matchesKeyValue[2]) {
    objectKeyValue.value = matchesKeyValue[2];
  }

  if (objectKeyValue.key === null && objectKeyValue.value === null) {
    console.error(`Could not properly parse CSS Property ${CSSProperty} to an Object Key`);
  }

  return objectKeyValue;
};

export const objectKeyToCSSProperty = ({ key, value }: { key: string; value: string }) => {
  const formattedPropertyName = key.replace(/([A-Z])/g, val => `-${val.toLowerCase()}`);

  return `--${formattedPropertyName}: ${value}`;
};
