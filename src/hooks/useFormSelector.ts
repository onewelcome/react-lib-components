import { useEffect, useState } from 'react';
import { generateID } from '../util/helper';

export interface configObject {
  name: string | undefined;
  errorMessage?: string;
  error?: boolean;
  parentErrorId?: string;
  helperText?: string;
  parentHelperId?: string;
}

export const useFormSelector = (configObject: configObject) => {
  const [identifier] = useState(generateID(15, configObject.name));
  const [describedBy, setDescribedBy] = useState('');
  const [errorId] = useState(generateID(15, configObject.errorMessage));

  useEffect(() => {
    if (configObject.error && configObject.parentErrorId) {
      setDescribedBy(configObject.parentErrorId);
    }

    if (
      (!configObject.error && configObject.helperText) ||
      (!configObject.parentErrorId && !configObject.errorMessage && configObject.helperText)
    ) {
      setDescribedBy(`${identifier}`);
    }

    if (
      (!configObject.error && !configObject.helperText && configObject.parentHelperId) ||
      (!configObject.parentErrorId && !configObject.errorMessage && configObject.parentHelperId)
    ) {
      setDescribedBy(`${configObject.parentHelperId}`);
    }

    if (configObject.errorMessage && !configObject.parentErrorId && configObject.error) {
      setDescribedBy(errorId);
    }
  }, [identifier, configObject.error, configObject.parentErrorId]);

  return {
    describedBy,
    errorId,
    identifier,
  };
};
