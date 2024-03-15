image_folder="./src/assets/icons/*"
destination_path="./src/app/icons.ts"

# create array of icon
echo 'export const icons = [' > ${destination_path};\
  find "./src/assets/icons" -type f -name "*.svg"  | awk -F'/' '{print "\"" $5 "_" $6 "\"" "," }'\
  >> ${destination_path}; echo '];'\
  >> ${destination_path};

# create icon type
echo 'export type AppIcon = ' >> ${destination_path}; find ${image_folder} -type d | awk -F'/' '{print "\"" $5 "\"" "|" }' >> ${destination_path}; echo 'undefined;' >> ${destination_path};
