image_folder="./src/assets/icons"
destination_path="./src/app/icons.ts"

echo 'export const icons = [' > ${destination_path};\
  find "./src/assets/icons" -type f -name "*.svg"  | awk -F'/' '{print "\"" $5 "_" $6 "\"" "," }'\
  >> ${destination_path}; echo '];'\
  >> ${destination_path};

