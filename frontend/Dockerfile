FROM node:14.19

WORKDIR /frontend

COPY package*.json ./

RUN ["npm", "install"] 

COPY . .

CMD ["npm", "run", "dev"]
