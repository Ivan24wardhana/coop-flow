FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --platform=linux --arch=x64 --libc=musl

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]