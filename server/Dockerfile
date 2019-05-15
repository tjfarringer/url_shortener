# Which bash image/os are you starting "From"
FROM node:8-alpine

# Create a folder and set this as your working directory
WORKDIR /app

# "Copy" file to working dir
COPY package.json yarn.lock ./

# "Run" command that installs dependencies
RUN yarn install 

# Copy all files to working dir
COPY . .

# Set "env" variables
ENV PORT 7000

# Which port should the container listen on
EXPOSE $PORT

# When the container runs what command should it run
CMD [ "npm", "start:prod" ]
