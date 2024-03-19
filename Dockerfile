FROM node:16
WORKDIR /app
COPY package*.json /app/
COPY . /app/
EXPOSE 5173
CMD [ "npm", "start" ]