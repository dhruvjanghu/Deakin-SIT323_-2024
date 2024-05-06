# Using an official node runtime as a parent image
FROM node:16-alpine
# setting the working directory in the container
WORKDIR /usr/src/app
# coping the current directory contents into the container at /usr/src/app
COPY . .

# installing any needed packages specified in package.json
RUN npm install
# making port 3000 available 
EXPOSE 3000
# defining environment variable
ENV NODE_ENV=production
# running app.js when the container launches
CMD ["node", "index.js"]
# and thats it!