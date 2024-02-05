FROM node:18.18.2
COPY . .
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 8080
WORKDIR /
 
CMD pnpm start
