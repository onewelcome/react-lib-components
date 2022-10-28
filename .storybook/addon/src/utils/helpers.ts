export const CSSPropertyToObjectKey = (CSSProperty: string) => {
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

export const ObjectKeyToCSSProperty = ({ key, value }: { key: string; value: string }) => {
  const formattedPropertyName = key.replace(/([A-Z])/g, val => `-${val.toLowerCase()}`);

  return `--${formattedPropertyName}: ${value}`;
};
