#Specify a base image
FROM node:alpine

#SPECIFY A WORKING DIRECTORY
WORKDIR /usr/app

#COPY THE DEPENDENCIES FILE
COPY ./package.json ./

#COPY THE PROJECT
COPY ./ ./

#Install dependencies
RUN npm install 

#Default command
CMD ["npm","start"]
