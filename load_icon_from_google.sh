# Download image based on args that should be valid icon name
px=(20 24 40 48)
icon=$1
path=$(pwd)
google_link="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined"

for i in "${px[@]}"
do
  wget "${google_link}/${icon}/wght300/${i}px.svg" -P "${path}/src/assets/icons/${icon}"
done





