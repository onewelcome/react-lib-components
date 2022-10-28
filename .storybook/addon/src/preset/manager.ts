import { addons, types } from "@storybook/addons";

import { ADDON_ID, PANEL_ID } from "../constants";
import { Panel } from "../Panel";

// Register the addon
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "BaseStyling",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel
  });
});
