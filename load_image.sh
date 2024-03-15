px=(20 24 40 48)
icon=$1
path=$(pwd)

for i in "${px[@]}"
do
  wget "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/${icon}/wght300/${i}px.svg" -P "${path}/src/assets/icons/${icon}"
done





