import { BaseStyling } from '../src/_BaseStyling_/BaseStyling';
import './base.scss';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <BaseStyling
      properties={{
        fontFamily: "'Red Hat Display', sans-serif;",
      }}
    >
      <Story />
    </BaseStyling>
  ),
];
