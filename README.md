# Icon

## Load icon

load_image.sh allows to download image in all different optical size we need, then download them into assets/icons/<icon_name>/<optical_size>.svg

```bash
bash load_icon_from_google.sh <icon_name>
```

Then write image, go thourgh all svg files within assets/icon/<icon_name>/<optical_size>.svg to write all the names within a ts file. This is done to be able from typescript to register thanks to icon registry, all icons within this folder

```bash
bash write_icon_from_asset.sh <icon_name>
```
