From node:18
WORKDIR /use/app
COPY package*.json ./

RUN npm install

COPY . ./
EXPOSE 3000
CMD ["npm", "start"]

