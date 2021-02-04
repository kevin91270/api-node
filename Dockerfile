FROM node:latest
RUN git clone https://github.com/kevin91270/api-node
WORKDIR ./api-node
RUN npm install
CMD npm start
EXPOSE 3000
