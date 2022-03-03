import { useEffect, useState } from 'react';
import { generateID } from '../util/helper';

export interface configObject {
  name: string | undefined;
  errorMessage?: string;
  error?: boolean;
  errorMessageId?: string;
  helperText?: string;
  parentHelperId?: string;
}

export const useFormSelector = (configObject: configObject) => {
  const [identifier] = useState(generateID(15, configObject.name));
  const [describedBy, setDescribedBy] = useState('');
  const [errorId] = useState(generateID(15, configObject.errorMessage));

  useEffect(() => {
    if (configObject.error && configObject.errorMessageId) {
      setDescribedBy(configObject.errorMessageId);
    }

    if (
      (!configObject.error && configObject.helperText) ||
      (!configObject.errorMessageId && !configObject.errorMessage && configObject.helperText)
    ) {
      setDescribedBy(`${identifier}`);
    }

    if (
      (!configObject.error && !configObject.helperText && configObject.parentHelperId) ||
      (!configObject.errorMessageId && !configObject.errorMessage && configObject.parentHelperId)
    ) {
      setDescribedBy(`${configObject.parentHelperId}`);
    }

    if (configObject.errorMessage && !configObject.errorMessageId && configObject.error) {
      setDescribedBy(errorId);
    }
  }, [identifier, configObject.error, configObject.errorMessageId]);

  return {
    describedBy,
    errorId,
    identifier,
  };
};
