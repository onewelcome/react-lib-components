import React from 'react';

/**
 * By default typescript does not allow data-* attributes on HTMLAttributes interface. We extend the default React.HTMLAttributes interface here and add the dataAttribute possibility into it.
 * An example of this can be found in Checkbox.tsx. We assign wrapperProps to the HTMLAttributes interface below, and are now able to add a test-id inside of Checkbox.test.tsx on line 77.
 */
type DataAttributeKey = `data-${string}`;

export interface HTMLProps<T> extends React.HTMLProps<T> {
  [dataAttribute: DataAttributeKey]: any;
}
