From node:17
WORKDIR /use/app
COPY package*.json ./

RUN npm install

COPY . ./
EXPOSE 8000
CMD ["node", "index.js"]

