#!/bin/bash

# Make output folder
mkdir -p output

# cd to prism folder
cd prism || exit

#zip and put in output folder
zip -r ../output/PrismExport.zip .
