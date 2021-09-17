FROM node:alpine
WORKDIR /backend
COPY ["package*.json", "./"]
RUN npm install
COPY . .
ENV MONGO_CONNECTION=mongodb://mongo:27017/api
CMD ["npm","run","start:dev"]