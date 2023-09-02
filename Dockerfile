FROM node:18
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./
RUN npm run build 
EXPOSE 3000
CMD ["node", "src/app.js"]


