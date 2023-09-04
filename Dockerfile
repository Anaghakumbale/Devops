FROM node:18
WORKDIR /app
RUN echo 'node_modules' > .dockerignore && \
    echo 'npm-debug.log' >> .dockerignore && \
    echo '.git' >> .dockerignore && \
    echo '.env' >> .dockerignore && \
    echo '.dockerignore' >> .dockerignore
COPY package.json /app
RUN npm install
RUN npm run build 
EXPOSE 3000
CMD ["node", "src/app.js"]