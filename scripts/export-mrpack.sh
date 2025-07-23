#!/usr/bin/env bash

function grabField() {
    local field="$1"
    local result=$(cat "pack.toml" | grep "^$field = " | cut -d '=' -f 2 | tr -d '=' | cut -c 2-)
    echo "$result"
}

pack_name=$(grabField "name")
pack_version=$(grabField "version")
pack_mc_version=$(grabField "minecraft")

# Uncomment under this comment to enable upload to Modrinth
# echo >&2 'Updating Pack on Modrinth'
# MODRINTH_DATA=$(cat <<EOF
# {
#     "name": "$pack_name $pack_version",
#     "version_number": "$pack_version",
#         "Dependencies":[],
#         "game_versions": ["$pack_mc_version"],
#         "version_type": "release",
#         "loaders": ["fabric"],
#         "featured": false,
#         "project_id": "$MODRINTH_PROJECT_ID",
#         "file_parts": ["mrpack"],
#         "primary_file": "mrpack"
# }
# EOF
# )

packwiz mr export

mv "$pack_name-$pack_version.mrpack" output/

#Upload the pack to Modrinth uncomment # from the lines under this comment to enable upload
# curl 'https://api.modrinth.com/v2/version' \
# 	-H "Authorization: $MODRINTH_TOKEN" \
# 	-F "data=$MODRINTH_DATA" \
# 	-F "mrpack=@output/$pack_name-$pack_version.mrpack"