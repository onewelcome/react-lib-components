# Icon font
Icon font is generated using https://icomoon.io. To add/remove to this font, grab the selection.json and import it. Then add/remove whatever icons (in SVG format) you want, re-export and replace the font files + selection.json for the potential next time you need to add/remove icons.

## Importing current icons to Icomoon app
To add new icons go to [Icomoon app](https://icomoon.io/app/) and import `selection.json` by choosing the `Import icons` button (Please answer `Yes` when the popup appears).
Once icons are imported, you can add/replace/remove icons.

| HINT: Icomoon app stores all the projects you are working on. Be sure to add a new project or use incognito mode not to edit the obsoleted icon set. |
| --- |

## Adding a new icon

To add a new SVG icon, drag and drop it to the current icon set. New icons should be moved to the end to limit the number of changes during merging generated CSS styling with the current one.

### Alignment of added icon

The new icon should be aligned with the others. To do this, follow the steps below:

1. Select `Edit` from the navigation and click the added icon or hold down the `OPTION` key and click the added icon;
2. From the menu below the icon preview, choose `Scale` -> `Fit to Canvas`;
3. From the same menu, choose `Canvas/Alignment` -> `Align to Center`;
4. From the same menu, choose `Color` -> `Remove Colors`. This option may not be visible, which means that there are no colours set for the added SVG;
5. Set a meaningful tag and name (e.g. `close`, `hamburger-menu`).

## Replacing old icon with a new one

Follow the steps below to replace and align the new icon:

1. Select `Edit` from the navigation and click the added icon or hold down the `OPTION` key and click the added icon;
2. Click on the `Replace` action button and choose the new SVG.
3. From the menu below the icon preview, choose `Scale` -> `Fit to Canvas`;
4. From the same menu, choose `Canvas/Alignment` -> `Align to Center`;
5. From the same menu, choose `Color` -> `Remove Colors`. This option may not be visible, which means that there are no colours set for the added SVG;

## Deleting an icon

To delete the icon, select `Remove` from the navigation and click the chosen icon or hold down the `OPTION + COMMAND` key and click the desired icon.

## Saving project & generating font

Click on the `Generate Font` button on the bottom part of the page and then `Download`.

## Merging fonts

Please respect the current content of the `Icon.module.scss` and replace it with the new content provided in the downloaded zip package. Also, don't forget to replace current fonts and `selection.json` in the `/font` directory.