# Icon font
Icon font is generated using https://icomoon.io. In order to add/remove to this font, simply grab the selection.json and import it. Then add/remove whatever icons (in SVG format) you want, re-export and replace the font files + selection.json for the potential next time you need to add/remove icons.

## Importing current icons to Icomoon app
To add new icons go to [Icomoon app](https://icomoon.io/app/) and import `selection.json` by chocing `Import icons` button (Please answer `Yes` when the popup appears).
Once icons are imported you can add/replace/remove icons.

| HINT: Icomoon app stores all the project you are working on. Be sure to add a new project or use incognito mode so as not to edit the obsoloted icon set. |
| --- |

## Adding new icon

To add a new SVG icon, just drag and drop it to the current icon set. New icons should be added to the end to limit number of changes during merging generated CSS styling with curent one.

### Aligment of added icon

The new icon should be aligned with the others. To do this, follow steps below:

1. Select `Edit` from the navigation and click the added icon or hold down the `OPTION` key and click the added icon;
2. From the menu below the icon preview, choose `Scale` -> `Fit to Canvas` and press the `Scale Down` button once;
3. From the same menu, choose `Canvas/Alignment` -> `Align to Center`;
4. From the same menu, choose `Color` -> `Remove Colors`. This option may not be visible, which means that there are no colors set for the added SVG;
5. Set meainingful tag and name (e.g. `close`, `hamburger-menu`).

## Replacing old icon with new one

Follow steps below to replace and align new icon:

1. Select `Edit` from the navigation and click the added icon or hold down the `OPTION` key and click the added icon;
2. Click on `Replace` action button and choose new SVG.
3. From the menu below the icon preview, choose `Scale` -> `Fit to Canvas` and press the `Scale Down` button once;
4. From the same menu, choose `Canvas/Alignment` -> `Align to Center`;
5. From the same menu, choose `Color` -> `Remove Colors`. This option may not be visible, which means that there are no colors set for the added SVG;

## Deleting icon

To delete icon select `Remove` from the navigation and click the chosen icon or hold down the `OPTION + COMMAND` key and click the chosen icon.

## Saving project & generating font

Click on `Generate Font` button on bottom part of the page and then `Download`.

## Mergin fonts

Please respect current content of the `Icon.module.scss` and replace it with the new content provided in the downloaded zip package. Also, don't forget to replace current fonts and `selection.json` in the `/font` directory.