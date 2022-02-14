# liatrioappproject
title: 'Node.js application exposing a REST endpoint returning the message:"Automate all the things!", and a current "timestamp":1644852951'
Note that: the timestamp is expressed in seconds and will vary depending on you current local time. 
layout: Doc
platform: AWS
language: nodeJS
Description: This application contains:
- app.js file which defines the message and timestamp round to the nearest power and express in seconds. The REST API is running on port 3000 on your localhost.
To display the static message, clone this content to your local system with the command " git clone https://github.com/eatembe1/liatrioappproject.git and
run "npm run start" on your local terminal. On your browser, do httpd://localhost:3000 and the message: 
"Automate all the things!", and a current "timestamp":1644852951' will be displayed.
- Package.json file add the neccessary dependencies, displays the REST API version and runs a script to starts the node app.
- Dockerfile which will be used to build the docker image and run in a kubernetes cluster in aws platform. The Dockerfile defines the working directory, and copies the package.json
file to the working directory. 
