
FROM node:16-alpine
WORKDIR /adv
COPY package.json ./
RUN npm install
COPY dist ./dist
RUN npm install pm2@latest -g
EXPOSE 6969
CMD ["pm2 start","dist/index.js"]