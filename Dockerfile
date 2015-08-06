FROM mhart/alpine-node-base

WORKDIR /opt/hello-world
ADD . .

EXPOSE 80
CMD ["node", "server.js"]
