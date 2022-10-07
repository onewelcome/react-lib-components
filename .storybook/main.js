module.exports = {
  stories: ["../stories/intro.stories.mdx", "../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-a11y"
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build
  },
  core: {
    builder: "webpack5",
    disableTelemetry: true
  },
  staticDirs: ["../public"]
};
