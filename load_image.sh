# Download image based on args that should be valid icon name
px=(20 24 40 48)
icon=$1
path=$(pwd)
google_link="https://fonts.google.com/specimen/Material+Icons+Outlined?query=material+icons+outlined"

for i in "${px[@]}"
do
  wget "${google_link}/${icon}/wght300/${i}px.svg" -P "${path}/src/assets/icons/${icon}"
done





