FROM ghcr.io/ipoglif/test@sha256:186f9c699096feb2593aeb6312bbafbadda8dc342a85f889f52e675772c2be36

ENV NODE_ENV=prod
CMD ["node", "app.js"]

COPY package.json .
RUN npm install
COPY . .