export type DataAttributeKey = `data-${string}`;

export interface KeyValuePair {
  [dataAttribute: DataAttributeKey]: unknown;
}
