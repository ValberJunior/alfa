FROM ubuntu
WORKDIR /app

COPY . . 
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get install -y npm
RUN apt-get install -y nodejs

WORKDIR /app


RUN npm install

ENTRYPOINT npm start



